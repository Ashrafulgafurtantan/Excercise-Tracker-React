import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
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
        console.log("data sent successfully");
        setUsername("");
        toast.success("data sent successfully", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 1500,
        });
        setTimeout(() => {
          window.location = "/create";
        }, 1500);
      })
      .catch(() => {
        console.log("data sent failure");
        toast.error("Name must be unque...", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 2000,
        });
      });
  }
  function handleChange(event) {
    const { value } = event.target;
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
            size="md"
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
