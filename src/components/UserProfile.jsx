import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const auth0 = await createAuthClient({

        domain = import.meta.env.REACT_APP_YOUR_DOMAIN,
        clientID = import.meta.env.REACT_APP_YOUR_CLIENT_ID,
        redirectUri = window.location.origin,
      })
      setAuthClient(auth0)

      // handle redirect when user returns

     
      // Check is user is authenticated 

      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      // If authenticated, fetch user 

      if (isAuthenticated) {
        const user = await auth0.getUser()
        setUser(user);
      }
      setIsLoading(false)
    };
  
  }, []);

  return (
    <div></div>
  );
};

export default UserProfile;
