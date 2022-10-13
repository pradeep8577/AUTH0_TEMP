import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user);

    const date = new Date(user?.updated_at);
    const localDate = date.toLocaleString();
    //show the user's name, email, and last login date
    console.log(localDate);

    //fisrt, check if the user is authenticated

    

  return (
    <>
      <div className="container">
        <div className="row">
            <h1>Welcome {isAuthenticated ?`Hello ${user.name}` : "Please Login"}</h1>
            <h2>Last login: {localDate}</h2>
          </div>
      </div>
    </>
  )
}

export default Home