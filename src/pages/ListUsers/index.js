import "./ListUsers.scss"
import { Helmet } from "react-helmet"

import ListUsersLogic from "./logic"
import Header from "components/Header"
import Footer from "components/Footer"
import Loading from "components/Loading"
import Filter from "./components/Filter"
import UsersList from "./components/UsersList"

function ListUsers({
  type,
  users,
  search,
  hasUsers,
  lastItemRef,
  isLoading,
  onTypeChange,
  onSearchChange,
}) {
  return (
    <div className="list-users-page">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>

      <Header withSearch onSearchChange={onSearchChange} />

      <main className="container">
        <Filter search={search} type={type} onTypeChange={onTypeChange} />

        <UsersList
          hasUsers={hasUsers}
          users={users}
          type={type}
          search={search}
          lastItemRef={lastItemRef}
        />
        {isLoading && <Loading />}
      </main>

      <Footer />
    </div>
  )
}

export default ListUsersLogic(ListUsers)
