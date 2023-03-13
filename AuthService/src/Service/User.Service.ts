import userModel from "../Models/User";
import { User } from "../Models/User";



export default class UserService {
    async saveUser(user: User): Promise<string | User> {
        let data = await userModel.findOne({ $or: [{ email: user.email }, { username: user.username }] });
        if (data) return "User already Exist"
        else return userModel.create(user);
    }
    async authenticateUser(user: User): Promise<string | User> {
        let data = await userModel.findOne({ email: user.email });
        if (!data) return "email not registered"
        else {
            let loginData = await userModel.findOne({ $and: [{ email: user.email }, { username: user.username }] });
            if (!loginData) {
                return "wrong credential";
            }
            return loginData;
        }
    }
}

