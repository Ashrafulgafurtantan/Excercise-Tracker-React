import React, { useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";
const ExercisesList = () => {
  const [exercises, setExercises] = React.useState([]);

  function deleteExe(id) {
    axios
      .delete("http://localhost:5000/exercises" + id)
      .then((res) => console.log(res.data));
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((response) => {
        const { data } = response;

        data.map((val) => {
          return setExercises((prevValue) => {
            return [...prevValue, val];
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [setExercises]);

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((currentExercise, index) => {
            return (
              <Exercise
                exercise={currentExercise}
                deleteExercise={deleteExe}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
