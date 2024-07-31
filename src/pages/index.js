import React from 'react';
import Layout from '../components/layout';


const IndexPage = () => {
  return (
    <main>
      < Layout pageTitle="Welcome to Kat Biel Tech World!">
        <p>Where I talk about my experience as a female career changer in a tech industry</p>  
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Kat Biel Tech World</title>
