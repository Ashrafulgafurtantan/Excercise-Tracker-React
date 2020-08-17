const mongoose = require("mongoose");
const exerciseSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Exercise = new mongoose.model("Exercise", exerciseSchema);

// const exercise = new Exercise({
//   title: "Hiking",
//   content: "Mountain",
// });

// exercise.save((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Data saved successfully !!!");
//   }
// });

module.exports = Exercise;
