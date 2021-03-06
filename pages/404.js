import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Flex
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Flex  
        direction={'column'}
        align={'center'}
        justify={'center'}
        maxH={ 'container.xl' }
    >
        <Container>
            <Heading as='h1'>Not found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} align='center'>
                <NextLink href='/'>
                    <Button colorScheme='teal'>Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    </Flex>
  )
}

export default NotFound;
export { getInitialProps } from '../components/chakra';