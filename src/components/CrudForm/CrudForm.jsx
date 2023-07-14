import { useState, useEffect } from "react";
import { postUser } from "../../services/postUser";
import "./CrudForm.css";

const CrudForm = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
    // setFormJson(formJson);
    // postUser(formJson);

    setFirst_name(formJson.first_name);
    setLast_name(formJson.last_name);
    setEmail(formJson.email);
    setPassword(formJson.password);
    setBirthday(formJson.birthday);

    var raw = `{\r\n  "first_name":"${first_name}",\r\n    "last_name": "${last_name}",\r\n    "email": "${email}",\r\n    "password": "${password}",\r\n    "birthday": "${birthday}"  \r\n}\r\n`;

    console.log(raw);
    postUser(raw);
  };

  return (
    <>
      <h2
        style={{
          paddingTop: "15vh",
        }}
        className="h2"
      >
        Modify, Add or Delete Users.
      </h2>

      <section>
        <div
          style={{
            fontSize: "250px",
          }}
        >
          👁️
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="POST-user">First Name</label>
          <input type="text" name="first_name" id="Post-user" />

          <label htmlFor="POST-user">Last Name</label>
          <input type="text" name="last_name" id="Post-user" />

          <label htmlFor="POST-user">Email</label>
          <input type="email" name="email" id="Post-user" />

          <label htmlFor="POST-user">Password</label>
          <input type="password" name="password" id="Post-user" />

          <label htmlFor="POST-user">Birthday</label>
          <input type="date" name="birthday" id="Post-user" />

          <input type="submit" value="Create" />
        </form>
      </section>
    </>
  );
};

export default CrudForm;
