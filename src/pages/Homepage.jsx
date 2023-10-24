import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

const name = () => {
  return (
    <>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>

      <Link to="/app">Go to app</Link>
    </>
  );
};

export default name;
