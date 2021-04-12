import * as React from 'react';

import { 
    Text, 
    Flex, 
    Box, 
    Image, 
    useColorMode, 
    useToast,
} from '@chakra-ui/react';

import useSound from 'use-sound';

import { TextureType } from '@/model/Texture';

import MotionBox from './MotionBox';

import switchOnSound from '~/public/sounds/switch-on.mp3';

export const Card = ({ texture_name, raw_code, image }: TextureType) => {
    const toast = useToast();
    const [play] = useSound(switchOnSound);

    const copyObjectTexture = async (raw_code: string) => {
        if (navigator && navigator.clipboard) {
            await navigator.clipboard.writeText(raw_code);
            toast.closeAll();

            play();

            toast({
                title: '🤩',
                description: `Copied texture ${texture_name} to your clipboard`,
                status: 'success',
                duration: 4000,
                position: 'top-right',
                isClosable: true,
            });
        }
    }

    const { colorMode } = useColorMode();

    const cardColor = { light: 'gray.10', dark: '#2b2b2b' };
    const hoverCardColor = { light: 'blue.50', dark: '#202020' };

    return (
        <Flex
            minW={['8rem', '10rem']}
            minH={['8rem', '10rem']}
            maxW="12rem"
            borderWidth="2px"
            borderRadius="lg"
            flexDirection="column"
            m="0 20px 20px 0"
            boxShadow="sm"
            bg={cardColor[colorMode]}
            textAlign="center"
            onClick={() => copyObjectTexture(raw_code)}
            cursor="pointer"
            _hover={{ backgroundColor: `${hoverCardColor[colorMode]}` }}
            transition="all 200ms ease-in"
        >
            <MotionBox
                position="relative"
                textAlign="center"
                whileHover={{ scale: 1.05 }}
                role="group"
            >
                <Flex
                    px="10px"
                    py="25px"
                    justifyContent="center"
                    w="100%"
                    borderRadius="full"
                    wordBreak="break-all"
                >
                    <Image
                        src={image ? `/images/${texture_name}/${image}.png` : '/questions.svg'}
                        width="9rem"
                        height="12.5rem"
                        borderRadius="sm"
                        _groupHover={{ opacity: 0.5 }}
                        style={{
                            filter: `drop-shadow(0 0 0.10rem ${
                                colorMode === "light" ? "gray" : "black"
                            })`
                        }}
                        alt={`${image}`}
                    />
                </Flex>
                <Box px="10px" py="15px" wordBreak="break-word" borderRadius="full">
                    <Text fontWeight="bold">{texture_name}</Text>
                </Box>
                <Text
                    textTransform="uppercase"
                    fontSize="xs"
                    fontWeight="bold"
                    letterSpacing={2}
                    textAlign="center"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    visibility="hidden"
                    color="white"
                    _groupHover={{ visibility: "visible" }}
                >
                    {raw_code}
                </Text>
            </MotionBox>
        </Flex>
    )
}