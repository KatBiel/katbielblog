import * as React from "react"
import {Link} from "gatsby"

const AboutPage = () => {
    return (
        <main>
        <h1>About me</h1>
        <p>Hey there! My name is Kat and I am CarbonKittyKat. I am thrilled to welcome you in my Tech World space!</p>
        < Link to="/">Back to home page</Link>
        </main>
    )
}

export default AboutPage

export const Head = () => <title>About Me</title>

