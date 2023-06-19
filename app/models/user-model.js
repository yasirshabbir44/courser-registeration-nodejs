const { Schema, model } = require("mongoose");
const { ROLE } = require("../config/roles");

const UserSchema = new Schema(
  {
    role: {
      type: String,
      default: "user",
      enum: [ROLE.user, ROLE.admin, ROLE.superadmin],
    },
    username: {
      type: String,
      required: true,
      id: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);
