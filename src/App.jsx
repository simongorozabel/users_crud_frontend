import "./App.css";
import { Col, Container, Navbar, Row, Spinner, Toast } from "react-bootstrap";
import UsersForm from "./components/CrudForm/UsersForm";
import UsersList from "./components/CrudList/UsersList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, SetUsers] = useState([]);
  const [notification, setNotification] = useState({
    message: "",
    variant: "success",
    show: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud-backend-07u5.onrender.com/users")
      .then((res) => SetUsers(res.data))
      .finally(() => setIsLoading(false));
  };

  const showSuccessNotf = (message) => {
    setNotification({ message, variant: "success", show: true });
  };

  const showFailNotf = (message) => {
    setNotification({
      message: message ? message : "There was an error",
      variant: "danger",
      show: true,
    });
  };

  const selectUser = (toDo) => setUserSelected(toDo);
  const deselectUser = () => setUserSelected(null);

  return (
    <>
      <Navbar
        style={{
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 3px crimson, 0 0 2px whitesmoke",
          background: "#000",
        }}
      >
        <Container>
          <Navbar.Brand
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              fontWeight: "900",
              letterSpacing: "5px",
              fontSize: "42px",
              fontStyle: "italic",
              textShadow: "0 0 2px red,0 0 1px white",
            }}
            href="/"
          >
            Users Crud
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Spinner className={`ms-auto d-block ${!isLoading && "invisible"}`} />
        <Row
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-evenly",
            marginTop: "20px",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          <Col>
            <UsersForm
              getUsers={getUsers}
              showSuccessNotf={showSuccessNotf}
              showFailNotf={showFailNotf}
              setIsLoading={setIsLoading}
              userSelected={userSelected}
              deselectUser={deselectUser}
            />
          </Col>
          <Col
            style={{
              width: "100%",
              margin: "10px",
              maxWidth: "350px",
            }}
          >
            <UsersList
              users={users}
              getUsers={getUsers}
              showSuccessNotf={showSuccessNotf}
              showFailNotf={showFailNotf}
              setIsLoading={setIsLoading}
              selectUser={selectUser}
            />
          </Col>
        </Row>
      </Container>
      <Container
        style={{ position: "fixed", bottom: "40px", left: 0, right: 0 }}
      >
        <Toast
          onClose={() => setNotification({ ...notification, show: false })}
          position="bottom-start"
          show={notification.show}
          bg={notification.variant}
          delay={3000}
          autohide
        >
          <Toast.Body>{notification.message}</Toast.Body>
        </Toast>
      </Container>
    </>
  );
}

export default App;
