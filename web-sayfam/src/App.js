import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App  dark:bg-zinc-900">
      <Header />
      <Skills />
    </div>
  );
}

export default App;
