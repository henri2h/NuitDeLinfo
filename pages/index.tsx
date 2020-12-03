import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import {Level, Heading, Section, Hero, Container} from "react-bulma-components";

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
      <Section>
        <Hero >
          <Hero.Body>
            <Container>
              <Heading>
              Welcome back user
              </Heading>
              <Heading subtitle size={3}>
              Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
        <main>
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
