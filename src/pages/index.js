import React from 'react';
import * as styles from './index.module.css';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <main>
      < Layout pageTitle="Welcome to Kat Biel Tech World!">
        <p>Where I talk about my experience as a female career changer in a tech industry</p>
        <p>This site is currently under construction... Please, visit back again soon.</p>   
        <div className={styles.imageWrapper}>
        {/* <StaticImage
        alt="A notebook, ipad and a cup of coffee or tea on a table"
        src="../images/pexels-pixabay-261579.jpg"
        /> */}
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Kat Biel Tech World</title>
