const UserModel = require('../model/userModel')

const userController = {
    async get(req, res) {


        try {
            const user = await UserModel.find();
            res.status(200).json({ msg: "User find", user: user, total: user.length, flag: 1 })
        } catch (error) {
            res.status(500).json({ msg: "Internal server error", flag: 0 })
        }

    },
    async create(req,res) {
        try {
            const userExist = await UserModel.findOne({ email: req.body.email })
            if (userExist) res.status(500).json({ msg: "User already exist", flag: 0 })

            await new UserModel({
                name: req.body.name, email: req.body.email, contact: req.body.contact
            }).save()
            res.status(201).json({ msg: "User create succesfully", flag: 1 });

        } catch (error) {
            res.status(500).json({ msg: "Internal server error", flag: 0 });
        }
    },
    async status(req, res) {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);
            if (user) {
                await UserModel.updateOne(
                    { _id: id },
                    {
                        $set: {
                            status: !user.status
                        }
                    }
                )
                res.status(200).json({ msg: "User status update", flag: 1 })

            } else {
                res.status(500).json({ msg: "Internal server error", flag: 0 });
            }


        } catch (error) {
            res.status(500).json({ msg: "Internal server error", flag: 0 });
        }

    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            const checkUser = await UserModel.findByIdAndDelete(id);
            res.status(200).json({ msg: "User delete", flag: 1 })


        } catch (error) {
            res.status(500).json({ msg: "Internal server error", flag: 0 });
        }

    }
}

module.exports = userController