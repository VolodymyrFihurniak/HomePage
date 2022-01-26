import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
import { RiTelegramLine } from 'react-icons/ri'
import { Meta } from '../components/work';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius='lg'
        mb={6}
        mt={3}
        p={3}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Ukraine!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Volodymyr Fihurniak
          </Heading>
          <p>Digital Craftsman ( Developer )<br/>Skill:<br/></p>
          <List ml={10} my={6}>
            <ListItem>
              <Meta>JS (ES6) / NodeJS</Meta>
              <Meta>React</Meta>
              <Meta>Next</Meta>
              <Meta>Vue</Meta>
            </ListItem>
            <ListItem>
              <Meta>Python</Meta>
            </ListItem>
            <ListItem>
              <Meta>C/C++</Meta>
            </ListItem>
          </List>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        >
          <Image
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='130px'
            display='inline-block'
            borderRadius='full'
            src='/images/fihurniak.jpg'
            alt='Profile image'
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
            At the moment I am studying to be a specialist in information security at the higher educational institution:
            National University of Lviv Polytechnic, 
            in the fourth year.
        </Paragraph>
        <Box align='center' my={4}>
          <NextLink href='/works'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Lviv, Ukraine.
        </BioSection>
        <BioSection>
          <BioYear>2007</BioYear>
          Beginning of secondary school № 7.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completion of secondary school № 7.
        </BioSection>
        <BioSection>
          <BioYear>2018 ...</BioYear>
          Beginning of higher education: National University of Lviv Polytechnic.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          I ♥
        </Heading>
        <Paragraph>
          <Link href='https://open.spotify.com/user/316cclhoonsrldkj676brd2octbi' target='_blank'>
          Music,{' '}
          </Link>
           Photography, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/VolodymyrFihurniak' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @VolodymyrFihurniak
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://t.me/jetlife_sh' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={RiTelegramLine} />}
              >
                @jetlife_sh (English/Ukrain)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://www.instagram.com/gateway.sh/' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @gateway.sh
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align='center' my={4}>
          <NextLink href='/posts'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'