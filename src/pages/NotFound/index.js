import { Helmet } from "react-helmet"

import "./NotFound.scss"
import Header from "components/Header"

function NotFound() {
  return (
    <div className="list-users-page">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>
      <Header withSearch />
      <h1>404 AEEEEEEEEE</h1>
    </div>
  )
}

export default NotFound
