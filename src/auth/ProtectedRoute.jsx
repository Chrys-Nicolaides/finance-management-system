import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ReactComponent as Loading } from "../images/loading.svg";
import Modal from "../components/Modal";

const ProtectedRoute = (props) => {
  return (
    <Route
      component={withAuthenticationRequired(props.component, {
        onRedirecting: () => (
          <Modal>
            <Loading />
          </Modal>
        ),
      })}
      {...props.args}
    />
  );
};

export default ProtectedRoute;
