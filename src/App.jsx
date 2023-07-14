import Nav from "./components/Nav/Nav";
import UserCard from "./components/UserCard/UserCard";
import "./App.css";
import CrudForm from "./components/CrudForm/CrudForm";

function App() {
  return (
    <>
      <Nav />
      <CrudForm />
      <UserCard />
    </>
  );
}

export default App;
