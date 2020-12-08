const router = require("express").Router();
const User = require("../modals/user");


router.post("/register", async (req, res) => {
    const {name, email, password} = req.body;
    try{
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "Opps!! User Already Exists.."});
        }
    
        user = new User( {
            name,
           email,
           password: hashed_password,
        });
        await user.save();
        return res.status(201).json({ message: "User Created Succesfully"});
    }

    catch (err){
        console.log(err);
    }
});


module.exports = router;