import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='Universal parser'>
    <Container>
      <Title>
        Parser <Badge>2021</Badge>
      </Title>
      <P>
        Async IO Parser in Python
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href='https://github.com/VolodymyrFihurniak/Parser'>
            https://github.com/VolodymyrFihurniak/Parser <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python (Async/Aiohttp)</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';