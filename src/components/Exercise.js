import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Exercise(props) {
  const id = props.exercise._id;
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Button variant="link">
          <Link to={"/edit/" + id}>edit </Link>
        </Button>
        |
        <Button
          type="submit"
          variant="link"
          onClick={() => {
            props.deleteExercise(id);
          }}
        >
          delete
        </Button>
      </td>
    </tr>
  );
}

export default Exercise;
