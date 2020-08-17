import React from "react";
//import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
  const [detail, setDetail] = React.useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: ["Ashraf", "Tuan", "Yasin"],
  });
  // const [selectedDate, setDate] = React.useState(null);
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
    // axios({
    //   url: "http://localhost:5000/exercises/add",
    //   method: "POST",
    //   data: payload,
    // })
    //   .then(() => {
    //     console.log("data sent success");
    //     setStory({ title: "", body: "" });
    //   })
    //   .catch(() => {
    //     console.log("data sent failure");
    //   });
  }
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label>

          <input
            type="text"
            name="username"
            required
            className="form-control"
            value={detail.username}
            onChange={handleChange}
          />
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
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
//  <select
//     ref="userInput"
//     required
//     className="form-control"
//     value={detail.username}
//     onChange={handleChange}
//   >
//     {detail.users.map(function (user, index) {
//       return (
//         <option key={index} value={user}>
//           {user}
//         </option>
//       );
//     })}
//   </select>
export default CreateExercise;
