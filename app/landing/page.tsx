'use client';

import { useState } from "react";
import LoggedOut from "../loggedout/page";
import LoggedIn from "../loggedIn/page";



const Landing = () => {



  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
        {loggedIn ? <LoggedIn setLoggedIn={setLoggedIn} /> : <LoggedOut setLoggedIn={setLoggedIn} />}
    </div>
  )
}

export default Landing