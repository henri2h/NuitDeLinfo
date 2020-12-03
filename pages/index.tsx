import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import {
  Level,
  Heading,
  Section,
  Content,
  Container,
  Columns,
  Hero,
  Box,
  Media,
  Image,
} from "react-bulma-components";

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <Section>
          <Hero>
            <Hero.Body>
              <Container>
                <Heading>Welcome back user</Heading>
                <Heading subtitle size={3}>
                  Subtitle
                </Heading>
              </Container>
            </Hero.Body>
          </Hero>
        </Section>
        <main>
          <Columns>
            <Columns.Column>
              <Box>
                <Media>
                  <Media.Item renderAs="figure" position="left">
                    <Image
                      size={64}
                      alt="64x64"
                      src="http://bulma.io/images/placeholders/128x128.png"
                    />
                  </Media.Item>
                  <Media.Item>
                    <Content>
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                        <small>31m</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </p>
                    </Content>
                  </Media.Item>
                </Media>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Box>
                <Media>
                  <Media.Item renderAs="figure" position="left">
                    <Image
                      size={64}
                      alt="64x64"
                      src="http://bulma.io/images/placeholders/128x128.png"
                    />
                  </Media.Item>
                  <Media.Item>
                    <Content>
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                        <small>31m</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </p>
                    </Content>
                  </Media.Item>
                </Media>
              </Box>
            </Columns.Column>

            <Columns.Column>
              <Box>
              <p>
                        <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                        <small>31m</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </p>
              </Box>
            </Columns.Column>
          </Columns>

          <Box
            responsive={{
              mobile: {
                display: {
                  value: "block",
                },
              },
              tablet: {
                display: {
                  value: "flex",
                },
              },
              desktop: {
                display: {
                  value: "inline-flex",
                  only: true,
                },
              },
              widescreen: {
                display: {
                  value: "inline-block",
                },
              },
            }}
            hide={{
              tablet: {
                hide: true,
                only: true,
              },
              widescreen: {
                hide: true,
              },
            }}
          >
            <Media>
              <Media.Item renderAs="figure" position="left">
                <Image
                  size={64}
                  alt="64x64"
                  src="http://bulma.io/images/placeholders/128x128.png"
                />
              </Media.Item>
              <Media.Item>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Box>
          <Level renderAs="nav">
            <Level.Item textAlignment="centered">
              <div>
                <p className="heading">tweets</p>
                <Heading renderAs="p">3,456</Heading>
              </div>
            </Level.Item>
            <Level.Item textAlignment="centered">
              <div>
                <p className="heading">following</p>
                <Heading renderAs="p">123</Heading>
              </div>
            </Level.Item>
            <Level.Item textAlignment="centered">
              <div>
                <p className="heading">followers</p>
                <Heading renderAs="p">456K</Heading>
              </div>
            </Level.Item>
            <Level.Item textAlignment="centered">
              <div>
                <p className="heading">likes</p>
                <Heading renderAs="p">789</Heading>
              </div>
            </Level.Item>
          </Level>
        </main>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed");
  console.log(res.text());
  const feed = [];
  return {
    props: { feed },
  };
};

export default Home;
