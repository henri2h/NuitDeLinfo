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
  Button,
} from "react-bulma-components";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  const HeroStyle = {
    backgroundImage:
      'url("https://worth1000.s3.amazonaws.com/submissions/501500/501884_d50d_1024x2000.jpg")',
    backgroundSize: "cover",
    backgroundPositionY: "center",
  };

  const titleStyle = {
    color: "white",
    fontSize: "9vw",
  };
  const subtitleStyle = {
    color: "white",
    fontSize: "4rem",
  };

  return (
    <Layout>
      <div className="page">
        <Hero size="fullheight" style={HeroStyle}>
          <Hero.Body>
            <Container>
              <Heading size={1} style={titleStyle}>
                Wesh je suis un surfeur
              </Heading>
              <Heading size={3} style={subtitleStyle} subtitle>
                Casse casse casse
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>

        <main>
          <Columns>
            <Columns.Column>
              <Section>

              <div>
                  <Heading>Mes activités</Heading>
                  <Section>
                  <CalendarHeatmap
                    startDate={new Date("2020-01-01")}
                    endDate={new Date("2020-12-31")}
                    values={[
                      { date: "2020-01-01", count: 12 },
                      { date: "2020-01-22", count: 122 },
                      { date: "2020-09-30", count: 38 },
                      { date: "2020-09-1", count: 1 },
                      { date: "2020-10-28", count: 64 },
                      { date: "2020-10-29", count: 50 },
                      { date: "2020-10-30", count: 1 },
                      // ...and so on
                    ]}
                  />
                  </Section>
                </div>
            
                <Box>
                  <Heading>Ajouter vos activités</Heading>
                  <Level renderAs="nav">
                    <Level.Item textAlignment="centered">
                      <div>
                        <p>
                          Hello beauté
                          <br />
                          Qu'es ce que tu a fais aujourd'hui ?
                        </p>
                      </div>
                    </Level.Item>

                    <Level.Item textAlignment="centered">
                      <div>
                        <Button renderAs="span" color="info">
                          Ajouter mon activitée d'aujourd'hui
                        </Button>
                      </div>
                    </Level.Item>
                  </Level>
                </Box>
  </Section>
            </Columns.Column>
            <Columns.Column size={4}>
              <Section>
                <Image src="https://vignette3.wikia.nocookie.net/p__/images/a/a7/3641-brice-de-nice-3-un-tournage-pour-septembre.jpg/revision/latest?cb=20161025120448&path-prefix=protagonist" />
              </Section>
            </Columns.Column>
          </Columns>

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
