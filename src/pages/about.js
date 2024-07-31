import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About me">
                <p>This will have some info about me</p>
            </Layout>
        </main>
    )
}

export default AboutPage

export const Head = () => <title>About Me</title>

