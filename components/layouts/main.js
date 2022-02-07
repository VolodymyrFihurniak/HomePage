import Head from 'next/head';
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer'
import TextureRoomLoader from '../room-loader';
import dynamic from 'next/dynamic';

const RoomLoader = dynamic(() => import('../room'), {
    ssr: false,
    loading: () => <TextureRoomLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Fihurniak homepage" />
                    <meta name="author" content="Volodymyr Fihurniak" />
                    <meta name="author" content="volodymyr.fihurniak" />
                    <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@volodymyr.fihurniak" />
                    <meta name="twitter:creator" content="@volodymyr.fihurniak" />
                    <meta name="twitter:image" content="/card.png" />
                    <meta property="og:site_name" content="Volodymyr Fihurniak Homepage" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/card.png" />
                    <title>Volodymyr Fihurniak</title>
                </Head>
            <NavBar path={router.asPath} />
            <Container maxW='container.md' pt={14}>
                <RoomLoader  />
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;