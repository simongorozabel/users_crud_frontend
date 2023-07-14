import axios from "axios";
import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const UsersList = ({
  users,
  getUsers,
  showSuccessNotf,
  showFailNotf,
  setIsLoading,
  selectUser,
}) => {
  const deleteUser = (id) => {
    setIsLoading(true);
    axios
      .delete(`https://users-crud-backend-07u5.onrender.com/users/${id}`)
      .then(() => {
        getUsers();
        showSuccessNotf("User removed successfully");
      })
      .catch(() => showFailNotf())
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <ListGroup as="ol" numbered>
        {users.map((user) => (
          <ListGroup.Item as="li" key={user.id}>
            <div
              style={{
                backgroundColor: "#000",
                width: "100%",
                paddingLeft: "10px",
                marginBottom: "5px",
              }}
            >
              <div
                style={{
                  fontWeight: "700",
                }}
              >
                {user.first_name + " " + user.last_name}
              </div>
              <div>{user.birthday}</div>
              <div
                style={{
                  fontWeight: "200",
                  fontSize: "12px",
                }}
              >
                {user.email}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  marginTop: "5px",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "red",
                    border: "none",
                    borderRadius: "5px",
                    color: "white",
                    textShadow: "0 0 1px black",
                    width: "100px",
                    fontWeight: "600",
                    fontStyle: "italic",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
                <Button
                  style={{
                    backgroundColor: "orange",
                    border: "none",
                    borderRadius: "5px",
                    color: "white",
                    textShadow: "0 0 1px black",
                    width: "100px",
                    fontWeight: "600",
                    fontStyle: "italic",
                    cursor: "pointer",
                  }}
                  onClick={() => selectUser(user)}
                >
                  Update
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UsersList;
