/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import Head from 'next/head';
import { chakra, Flex, useDisclosure, HStack, Modal, VStack, ModalOverlay, ModalContent, ModalFooter, Image, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import * as Scroll from 'react-scroll';
import { Header } from '../components/Header';
import { SectionMain } from '../components/Section.main';
import { SectionProjects } from '../components/Section.projects';
import { SectionTeam } from '../components/Section.team';

const { Element } = Scroll;
const { Events } = Scroll;
const { scrollSpy } = Scroll;

const Home: NextPage = () => {
  useEffect(() => {
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Binary Hop</title>
      </Head>

      <Flex bgColor="background" h="100%" flexDirection="column">
        <Header onOpenContactModal={onOpen} />
        <Flex flexDirection="column" paddingX="40px">
          <Element name="main">
            <SectionMain />
          </Element>
          <Element name="projects">
            <SectionProjects />
          </Element>
          <Element name="team">
            <SectionTeam />
          </Element>
        </Flex>
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bgColor="background">
          <ModalHeader color="blue.100" fontFamily="barlow" fontSize="1.7rem">Get in touch!</ModalHeader>
          <ModalCloseButton color="blue.100" />
          <ModalBody color="blue.100" fontFamily="barlow" fontSize="1.3rem" fontWeight="300">
            We will talk with you soon as possible! 😄
          </ModalBody>
          <ModalBody color="blue.100" pt="40px">
            <VStack spacing="20px" w="100%" align="flex-start">
              <HStack spacing="20px">
                <Image src="/icons/mail.svg" alt="Mail" h="30px" w="30px" />
                <Link passHref href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryhop.tech&su=subject">
                  <chakra.a target="_blank" rel="noopener noreferrer" color="green">
                    contact@binaryhop.tech
                  </chakra.a>
                </Link>
              </HStack>
              <HStack spacing="20px">
                <Image src="/icons/phone.svg" alt="Phone" h="30px" w="30px" />
                <Link passHref href="https://api.whatsapp.com/send?phone=5585985913643">
                  <chakra.a target="_blank" rel="noopener noreferrer" color="green">
                    +55 85 98591-3643
                  </chakra.a>
                </Link>
              </HStack>
              <HStack spacing="20px">
                <Image src="/icons/instagram.svg" alt="Instagram" h="30px" w="30px" />
                <Link passHref href="https://www.instagram.com/b8.software/">
                  <chakra.a target="_blank" rel="noopener noreferrer" color="green">
                    b8.software
                  </chakra.a>
                </Link>
              </HStack>
              <HStack spacing="20px">
                <Image src="/icons/linkedin.svg" alt="Instagram" h="30px" w="30px" />
                <Link passHref href="https://www.linkedin.com/company/binary-hop">
                  <chakra.a target="_blank" rel="noopener noreferrer" color="green">
                    Binary Hop
                  </chakra.a>
                </Link>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
