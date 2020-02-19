import { navigate } from "gatsby"

function handlers({ type, search }) {
  return {
    goToUserDetail: function(userID) {
      navigate(`/usuario?userID=${userID}`, {
        state: {
          type,
          search,
        },
      })
    },
  }
}

export default handlers
