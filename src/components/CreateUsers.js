import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function CreateUsers() {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      username: username,
    };
    axios({
      url: "http://localhost:5000/users/add",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data sent success");
        setUsername("");
        window.location = "/";
      })
      .catch(() => {
        console.log("data sent failure");
      });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name + " = " + value);
    setUsername(value);
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Button
            variant="primary"
            size="lg"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
export default CreateUsers;
