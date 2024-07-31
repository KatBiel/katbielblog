import * as React from "react"
import {Link} from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to Kat Biel Tech World!</h1>
      <p>Content pending .... </p>
      <p>Check out about me page here:</p>
      < Link to="/about">About me page</Link>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Kat Biel Tech World</title>
