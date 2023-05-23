const User = require("../modals/User")
const bcrypt = require("bcrypt")

exports.register = async (req, res) => {
    try {
        const { password } = req.body

        const hashPass = await bcrypt.hash(password, 10)
        const result = await User.create({
            ...req.body,
            password: hashPass
        })
        res.json({
            message: "USER REGISTER SUCCESS",
            result
        })
    } catch (error) {
        res.json({ message: "Something Went Wrong " + error, error })
    }
}

exports.fetchUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            message: "USER REGISTER SUCCESS",
            result
        })
    } catch (error) {
        res.json({ message: "Something Went Wrong " + error, error })
    }
}