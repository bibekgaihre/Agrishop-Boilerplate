import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
declare var process: {
    env: {
        USER_SERVICE_URL: string,
        JWT_SECRET: string
    }
}

interface UserData {
    uid: string,
    uName: string,
    email: string,
    role: string,
    token: string
}

export default class User {
    constructor() { }

    public validateUser = async (username: string, email: string) => {
        try {
            let result = await axios({
                method: "post",
                url: process.env.USER_SERVICE_URL + "/login",
                data: {
                    username,
                    email
                }
            });
            if (result.data.username) {
                let userData = {} as UserData;
                userData.uid = result.data._id;
                userData.email = email;
                userData.role = result.data.role;
                userData.uName = username;
                const token = jwt.sign({ userData }, process.env.JWT_SECRET, { expiresIn: "30d" })
                userData.token = token
                return userData
            }

            return result.data;
        } catch (error: any) {
            console.log(error);
            if (error.code == "ENOTFOUND") {
                return "Server is unavailable currently."
            }
        }
    }

    public registerUser = async (username: string, email: string, role: string) => {
        try {
            let result = await axios({
                method: "post",
                url: process.env.USER_SERVICE_URL + "/register",
                data: {
                    username,
                    email,
                    role
                }
            });
            return result.data;
        } catch (error: any) {
            console.log(error);
            if (error.code == "ENOTFOUND") {
                return "Server is unavailable currently."
            }
        }
    }

}
