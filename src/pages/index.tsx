import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Hero } from '@/components/Hero';
import { Container } from '@/components/Container';
import { Main } from '@/components/Main';
import { ToggleColorMode } from '@/components/ToggleColorMode';
import { Footer } from '@/components/Footer';
import { TextureType } from '@/model/Texture';

import textures from '@/data/textures.json';

import siteConfig from '~/site.config';

const Index = ({ textures }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <NextSeo title={siteConfig.title} titleTemplate='%s' />
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>SA-MP Textures</title>
      <link rel="manifest" href="/site.webmanifest.json" />
      <link
        href="/android-chrome-192x192.png"
        rel="icon"
        type="image/png"
        sizes="192x192"
      />
      <link
        href="/android-chrome-512x512.png"
        rel="icon"
        type="image/png"
        sizes="512x512"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
    </Head>
    <Container>
      <Hero />
      <ToggleColorMode />
      <Main textures={textures} />
      <Footer />
    </Container>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  // const texturesData: Record<string, string> = textures;

  // const textureObjToArray: TextureType[] = Object.keys(texturesData).map(
  //   (objText: string) => {
  //     return {
  //       object_texture: `:${objText}:`,
  //       img: texturesData[objText] as string,
  //     }
  //   }
  // )

  const texturesData: TextureType[] = textures;

  return {
    props: {
      textures: texturesData,
    },
  };
};

export default Index;