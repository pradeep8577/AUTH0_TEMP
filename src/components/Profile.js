import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
const Profile = () => {

  const history = useNavigate();
  const { user, isAuthenticated, isLoading} = useAuth0();

  console.log(user);

  const date = new Date(user?.updated_at);
  const localDate = date.toLocaleString();
  //show the user's name, email, and last login date
  console.log(localDate);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  //if user is not authenticated, show the login button?  
  if (!isAuthenticated) {
    return (  
      history("/")
    );
  }

  return (
   <>
      {/* <JSONPretty data={user} /> */}
      <div className="container p-5 shadow-sm">
                {/* <h2>{isAuthenticated ? `Hello ${user.name}` : "Please Login"}</h2> */}

                {(
                    isAuthenticated && (
                        <>
                        <div className="row d-flex">
                            <div className="col-md-2">
                                <img className='rounded-circle ' src={user.picture} alt={user.name} />
                            </div>
                            <div className="col-md-8 pt-3">
                                <h2>{isAuthenticated ?`Hello ${user.name}` : "Please Login"}</h2>
                            </div>
                        </div>
                        <div className="row mt-4">
                                <p>{user.email}</p>
                                {/* date this account was created */}
                                <p>{localDate}</p>
                        </div>
                        </>
                ))}
        </div>
   </>
  );
};

export default Profile;