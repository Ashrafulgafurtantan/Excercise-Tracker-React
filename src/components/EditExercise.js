import React, { useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";

function EditExercise({ match }) {
  const id = match.params.id;
  console.log(id);

  // const [requestdata, setRequestData] = React.useState(new Date());
  const [detail, setDetail] = React.useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });
  const [dataUsers, setDataUsers] = React.useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/exercises/${id}`)
      .then((response) => {
        const { data } = response;

        setDetail({
          username: data.username,
          description: data.description,
          duration: data.duration,
          date: new Date(data.date.substring(0, 10)),
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //////////////////////

    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        const { data } = response;
        data.map((val) => {
          return setDataUsers((prevValue) => {
            return [...prevValue, val.username];
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setDetail]);

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
      url: "http://localhost:5000/exercises/update/" + match.params.id,
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
      })
      .catch(() => {
        console.log("data sent failure");
      });
    window.location = "/";
  }
  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={handleSubmit}>
        <div className="from-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            name="username"
            defaultValue={detail.username}
            onChange={handleChange}
          >
            <option value={detail.username} key={detail.username}>
              {detail.username}
            </option>
            {dataUsers.map((val, index) => {
              return detail.username !== val ? (
                <option key={index} value={val}>
                  {val}
                </option>
              ) : null;
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
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
export default EditExercise;
