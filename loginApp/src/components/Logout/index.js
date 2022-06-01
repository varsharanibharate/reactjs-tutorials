// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="logout-button" onClick={logout}>
      LogOut
    </button>
  )
}

export default Logout
