import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import "./ListUsers.scss"
import axios from "axios"

function Index() {
  const [date, setDate] = useState(null)
  useEffect(() => {
    async function getDate() {
      const res = await axios.post("/api/users", {})
      setDate(JSON.stringify(res))
    }
    getDate()
  }, [])
  return (
    <main>
      <Helmet>
        <title>Gatsby + Node.js (TypeScript) API</title>
      </Helmet>
      <h1>Gatsby + Node.js (TypeScript) API</h1>
      <h2>
        Deployed with{" "}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/zeit/now-examples/blob/master/gatsby-functions"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{" "}
        is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{" "}
        which contains a serverless{" "}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{" "}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : "Loading date..."}</p>
    </main>
  )
}

export default Index
