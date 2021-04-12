import { Text, Link, Stack } from '@chakra-ui/react';

import NextLink from 'next/link';

export const Footer = () => (
  <Stack my={'3rem'} align="center" spacing={4} maxW="4xl" mx="auto">
    <Text fontSize="smaller">
      Made with ❤️ by <NextLink href="https://iamaul.me" passHref><Link href="https://iamaul.me" target="_blank">iamaul</Link></NextLink>
    </Text>
  </Stack>
  // <Flex as="footer" py="3rem" {...props} />
);