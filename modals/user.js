const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
       firstname: {
            type: String,
            trim: true,
      required: true,
        },
        lastname: {
            type: String,
            trim: true,
      required: true,
        },
        email: {
            type: String,
            trim: true,
      required: true,
        },
        contact: {
            type: Number,
            required: true,
            },
            img:
    {
        data: Buffer,
        contentType: String
    }
    }, 
    { timestamps: true}
);

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("Image", userSchema);