import "./UsersList.scss"
import User from "../User"
import EmptyList from "../EmptyList"
import UsersListLogic from "./logic"
import AnimationFade from "components/Animations/Fade"

function UsersList({ hasUsers, users, goToUserDetail, lastItemRef }) {
  if (!hasUsers)
    return (
      <AnimationFade>
        <EmptyList />
      </AnimationFade>
    )
  return (
    <div className="list-users">
      {users.map((user, index) => {
        const isLastItem = users.length === index + 1
        const userProps = {
          ...(isLastItem && { refLastItem: lastItemRef, ultimo: true }),
          ...user,
          key: user._id,
          onClick: () => goToUserDetail(user._id),
        }

        return <User {...userProps} />
      })}
    </div>
  )
}

export default UsersListLogic(UsersList)
