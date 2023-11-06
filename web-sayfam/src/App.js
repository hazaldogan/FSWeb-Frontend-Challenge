import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import { getUsersParams } from "./utils/endpoints";
import { useAxios } from "./hooks/useAxios";
import { useEffect } from "react";
import { Spinner, Alert } from "reactstrap";

function App() {
  /* const [getUsers, users, usersLoading, usersError] = useAxios([]);
  useEffect(() => {
    getUsers(getUsersParams());
  }, []);

  const userName = users.map((user) => {
    return user.firstName;
  });
  if (usersLoading) {
    return <Spinner size="lg" />;
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
      <Header /* userName={userName} */ />
      <Skills />
      <Profile />
    </div>
  );
}

export default App;
