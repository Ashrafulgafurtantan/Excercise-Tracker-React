import React, { useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
function CreateExercise() {
  const [detail, setDetail] = React.useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });
  const [dataUsers, setDataUsers] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        const { data } = response;
        console.log(data);
        data.map((val) => {
          return setDataUsers((prevValue) => {
            return [...prevValue, val.username];
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setDataUsers]);

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name + " = " + value);
    setDetail((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      username: detail.username,
      description: detail.description,
      duration: detail.duration,

      date: detail.date,
    };
    console.log(payload);
    axios({
      url: "http://localhost:5000/exercises/add",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data sent success");
        setDetail({
          username: "",
          description: "",
          duration: 0,
          date: new Date(),
        });

        window.location = "/";
      })
      .catch(() => {
        console.log("data sent failure");
      });
  }
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form>
        <div className="from-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            name="username"
            defaultValue=""
            onChange={handleChange}
          >
            {dataUsers.map((val, index) => {
              return (
                <option key={index} value={val}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            name="description"
            className="form-control"
            value={detail.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            name="duration"
            className="form-control"
            value={detail.duration}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={detail.date}
              onChange={(date) => {
                setDetail((prevValue) => {
                  return {
                    ...prevValue,
                    date: date,
                  };
                });
              }}
            />
          </div>
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
export default CreateExercise;
