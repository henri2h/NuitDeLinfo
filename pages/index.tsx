import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import Post, { PostProps } from '../components/Post'

type Props = {
  feed: PostProps[]
}

const Home : React.FC<Props> = props => {
  return (
    <Layout>
      <div className="page">
        <h1>My Blog</h1>
        <main>
        
        </main>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/feed')
  console.log(res.text());
  const feed = []
  return {
    props: { feed },
  }
}

export default Home
