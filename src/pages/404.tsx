import {
    Box,
    Button,
    Image,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';

import NavLink from 'next/link';
import { NextSeo } from 'next-seo';

import { BiArrowBack } from 'react-icons/bi';

import { Container } from '@/components/Container';

const Page404 = () => {
    return (
        <>
            <NextSeo title={'😲 Oops, 404!'} titleTemplate='%s' />
            <Container>
                <Box width="50%" margin="0 auto" py={{ base: 20, md: 28 }}>
                    <Image src="/pixeltrue-search.svg" />
                    <Heading textAlign="center" size="sm">Come on, Chop!</Heading>
                    <Box textAlign="center" marginTop={5}>
                        <NavLink href="/" passHref>
                            <Button
                                rounded={'full'}
                                fontWeight={'normal'}
                                leftIcon={<BiArrowBack />}
                            >
                                Back
                            </Button>
                        </NavLink>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Page404;