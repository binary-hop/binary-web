import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Binary Hop</title>
    </Head>
    <Header />
    <Flex />
  </>
  );

export default Home;
