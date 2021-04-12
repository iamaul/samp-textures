import { Flex, Heading, Text } from '@chakra-ui/react';

import siteConfig from '~/site.config';

export const Hero = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <Flex
        pt="8"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
    >
        <Heading fontSize="7vw">{title} <Text as={'span'} color={'red.300'}>{subtitle}</Text></Heading>
        <Text fontSize={['0.9em', '1em']}>
            {siteConfig.description}
        </Text>
    </Flex>
);

Hero.defaultProps = {
    title: 'SA-MP',
    subtitle: 'Textures'
};