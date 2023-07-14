import axios from "axios";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const initialUser = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
};

const UsersForm = ({
  getUsers,
  showSuccessNotf,
  showFailNotf,
  setIsLoading,
  userSelected,
  deselectUser,
}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userSelected) reset(userSelected);
    else reset(initialUser);
  }, [userSelected]);

  const submit = (data) => {
    setIsLoading(true);
    if (userSelected) {
      axios
        .put(
          `https://users-crud-backend-07u5.onrender.com/users/${userSelected.id}`,
          data
        )
        .then(() => {
          getUsers();
          showSuccessNotf("User updated successfully");
          deselectUser();
        })
        .catch(() => showFailNotf())
        .finally(() => setIsLoading(false));
    } else {
      axios
        .post("https://users-crud-backend-07u5.onrender.com/users", data)
        .then(() => {
          getUsers();
          showSuccessNotf("User created successfully");
          reset(initialUser);
        })
        .catch(() => showFailNotf())
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Form style={{ marginLeft: "20px" }} onSubmit={handleSubmit(submit)}>
      <h3
        style={{
          fontWeight: "bold",
          fontSize: "35px",
        }}
      >
        Create User
      </h3>
      <Form.Group className="form" controlId="todoForm.first_name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" {...register("first_name")} />
      </Form.Group>

      <Form.Group className="form" controlId="todoForm.last_name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" {...register("last_name")} />
      </Form.Group>

      <Form.Group className="form" controlId="toDoForm.email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" {...register("email")} />
      </Form.Group>

      <Form.Group className="form" controlId="toDoForm.paswword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register("password")} />
      </Form.Group>

      <Form.Group className="form" controlId="toDoForm.paswword">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" {...register("birthday")} />
      </Form.Group>

      <Button
        style={{
          marginTop: "15px",
          width: "40%",
          fontWeight: "600",
          backgroundColor: "green",
          color: "whitesmoke",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          height: "40px",
          textShadow: "0 0 2px black",
        }}
        type="submit"
      >
        Submit
      </Button>
      {userSelected && (
        <Button
          style={{
            marginTop: "15px",
            width: "55%",
            marginLeft: "5%",
            fontWeight: "600",
            backgroundColor: "grey",
            color: "black",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            height: "40px",
            textShadow: "0 0 2px white",
          }}
          onClick={deselectUser}
        >
          Clear
        </Button>
      )}
    </Form>
  );
};

export default UsersForm;
