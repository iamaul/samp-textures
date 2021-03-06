import * as React from 'react';
import {
    Box,
    Input,
    Stack,
    Flex,
    Text,
    Image,
    FormLabel,
    FormControl,
} from '@chakra-ui/react';  

import { TextureType } from '@/model/Texture';
import { Card } from './Card';
import { Intersection } from './Intersection';

import { debounce } from '@/helpers/debounce';

interface TextureProps {
    textures: TextureType[];
}

type State = {
    totalTextures: TextureType[];
    textures: TextureType[];
    filteredTextures: TextureType[];
    texturesLength: number;
}

type Action = { type: 'SEARCH' | 'LOAD_MORE'; payload?: string };

const textureReducer = (state: State, action: Action): State => {
    const { type, payload } = action;
    const { texturesLength, totalTextures, filteredTextures } = state;

    switch (type) {
        case 'LOAD_MORE': {
            const newLength = Math.max(
                10,
                Math.min(texturesLength + 10, filteredTextures.length)
            );

            return {
                ...state,
                textures: filteredTextures.slice(0, newLength),
                texturesLength: newLength,
            }
        }

        case 'SEARCH': {
            let searchTerm = payload!.toLowerCase();

            if (searchTerm.trim() === '') {
                return {
                    ...state,
                    textures: totalTextures.slice(0, texturesLength),
                    filteredTextures: totalTextures,
                }
            }

            const searchResults = totalTextures.filter(({ raw_code }) =>
                raw_code.toLowerCase().includes(searchTerm)
            )

            return {
                ...state,
                textures: searchResults,
                filteredTextures: searchResults,
            }
        }

        default: {
            return { ...state }
        }
    }
}

export const Main = ({ textures }: TextureProps) => {
    const initialState = {
        totalTextures: textures,
        filteredTextures: textures,
        textures: textures.slice(0, 10),
        texturesLength: 10,
    }

    const [state, dispatch] = React.useReducer(textureReducer, initialState);

    const loadMore = React.useCallback(() => {
        dispatch({ type: 'LOAD_MORE' });
    }, []);

    const filterOnSearch = debounce((value: string) => {
        dispatch({ type: 'SEARCH', payload: value });
    }, 400);

    return (
        <Stack pt="8" w={['90%', '70%']}>
            <Box mb="3rem">
                <FormControl>
                    <FormLabel>???? Search</FormLabel>
                    <Input
                        placeholder="Keywords: door, wall, sign, floor, ceiling, etc..."
                        onChange={(e) => { filterOnSearch(e.target.value) }}
                    />
                </FormControl>
            </Box>
            <Flex
                flexWrap="wrap"
                w="100%"
                justifyContent="center"
                alignItems="center"
            >
                {state.textures.map((e) => (
                    <Card texture_name={e.texture_name} raw_code={e.raw_code} texture_image={e.texture_image} key={e.raw_code} />
                ))}
                {state.textures.length === 0 && (
                    <Box width="40%" margin="0 auto">
                        <Image src="/pixeltrue-seo.svg" />
                        <Text textAlign="center" fontWeight="bold">No texture found</Text>
                    </Box>
                )}
                <Intersection onVisible={() => loadMore()} />
            </Flex>
        </Stack>
    )
}