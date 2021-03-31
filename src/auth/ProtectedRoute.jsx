import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ReactComponent as Loading } from "../images/loading.svg";

const ProtectedRoute = (props) => {
  console.log(props);
  return (
    <Route
      component={withAuthenticationRequired(props.component, {
        onRedirecting: () => <Loading />,
      })}
      {...props.args}
    />
  );
};

export default ProtectedRoute;
