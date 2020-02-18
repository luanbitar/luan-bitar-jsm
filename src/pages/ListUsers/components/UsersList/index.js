import "./UsersList.scss"
import User from "../User"
import EmptyList from "../EmptyList"
import AnimationFade from "components/Animations/Fade"

function UsersList({ hasUsers, users }) {
  if (!hasUsers)
    return (
      <AnimationFade>
        <EmptyList />
      </AnimationFade>
    )
  return (
    <div className="list-users">
      {users.map(user => (
        <User {...user} key={user._id} />
      ))}
    </div>
  )
}

export default UsersList
