import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

import theme from '@/styles/theme';

import { SEO, SocialsProfileSEO } from '~/next-seo.config';
import siteConfig from '~/site.config';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} canonical={siteConfig.url + (router.asPath || '')} />
      <SocialProfileJsonLd {...SocialsProfileSEO} />

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;