import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

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