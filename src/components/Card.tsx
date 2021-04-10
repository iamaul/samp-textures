import * as React from 'react';

import { Text, Flex, Box, Image, useColorMode, useToast } from '@chakra-ui/react';

import { TextureType } from '@/model/Texture';

export const Card = ({ texture_name, object_texture, image }: TextureType) => {
    const toast = useToast();

    const copyObjectTexture = async (object_texture: string) => {
        if (navigator && navigator.clipboard) {
            await navigator.clipboard.writeText(object_texture);
            toast.closeAll();

            toast({
                title: '🎉',
                description: `Copied texture ${texture_name} to your clipboard`,
                status: 'success',
                duration: 4000,
                position: 'top-right',
                isClosable: true,
            });
        }
    }

    const { colorMode } = useColorMode();

    const cardColor = { light: 'blue.50', dark: '#2b2b2b' };
    const hoverCardColor = { light: 'blue.100', dark: '#202020' };

    return (
        <Flex
            minW={['8rem', '10rem']}
            minH={['8rem', '10rem']}
            maxW="12rem"
            borderWidth="2px"
            borderRadius="lg"
            flexDirection="column"
            m="0 20px 20px 0"
            boxShadow="0 1px 2px 0 rgba(0, 0, 0, .4)"
            bg={cardColor[colorMode]}
            textAlign="center"
            onClick={() => copyObjectTexture(object_texture)}
            cursor="pointer"
            _hover={{ backgroundColor: `${hoverCardColor[colorMode]}` }}
            transition="all 200ms ease-in"
        >
            <Flex
                px="10px"
                py="25px"
                justifyContent="center"
                w="100%"
                wordBreak="break-all"
            >
                <Image
                    src={image ? `/${texture_name}/${image}.png` : '/questions.svg'}
                    width="100%"
                    height="100%"
                    alt={`${image}`}
                />
            </Flex>
            <Box px="10px" py="15px" wordBreak="break-word">
                <Text>{object_texture}</Text>
                <Box mt={4}>
                    <Text fontWeight="bold">{texture_name}</Text>
                </Box>
            </Box>
        </Flex>
    )
}