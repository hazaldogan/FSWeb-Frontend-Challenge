import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { Spinner, Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/actions/usersActions";
import { SiteGlobalContext } from "./contexts/SiteGlobalProvider";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.users);
  const { theme } = useContext(SiteGlobalContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  /* 
  if (usersLoading) {
    return <Spinner />;
  }

  if (usersError) {
    return (
      <div className="main-container flex items-center justify-center content-center">
        <Alert color="danger">{usersError}</Alert>
      </div>
    );
  } */

  return (
    <div className="App  dark:bg-zinc-900">
      {user.isFetching && (
        <div className="main-container flex items-center justify-center content-center">
          <Spinner color="info">Loading...</Spinner>
        </div>
      )}
      {user.error && (
        <div className="main-container flex items-center justify-center content-center">
          <Alert color="danger">{user.error}</Alert>
        </div>
      )}
      <Header userName={user.users.first_name} />
      <Skills />
      <Profile />
      <Projects />
      <Footer email={user.users.email} />
    </div>
  );
}

export default App;
