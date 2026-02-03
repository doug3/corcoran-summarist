

import LoggedOut from "../loggedout/page";
import LoggedIn from "../loggedIn/page";



const Landing = () => {

    const loggedIn = false; // Replace with actual authentication logic

  return (
    <div>
        {loggedIn ? <LoggedIn /> : <LoggedOut />}
    </div>
  )
}

export default Landing