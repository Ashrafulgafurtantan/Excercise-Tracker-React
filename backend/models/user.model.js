const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);
const User = new mongoose.model("User", userSchema);

// const user = new User({
//   title: "JS",
//   content: "Java Script",
// });

// user.save((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Data saved successfully !!!");
//   }
// });

module.exports = User;
