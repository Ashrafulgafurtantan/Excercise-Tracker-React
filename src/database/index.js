import axios from "axios";
export const fetchUserData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    const { data } = response;

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchExerciseData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/exercises");
    const { data } = response;

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleExerciseData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/exercises/${id}`);
    const { data } = response;
    console.log("in single = " + data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
