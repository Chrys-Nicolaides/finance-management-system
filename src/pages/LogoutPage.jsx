import { useEffect } from "react";
import { useHistory } from "react-router"

const LogoutPage = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/")
  }, [history])

  return ""
}

export default LogoutPage
