import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
declare var process: {
    env: {
        JWT_SECRET: string,
    }
}


const secureAPI = () => {

    return (req: Request, res: Response, next: NextFunction) => {

        try {


            if (!req.headers.authorization) {
                return res
                    .status(401)
                    .json({ message: "Auth Failed. Must send valid token" });
            }
            let authorization: string = String(req.headers['authorization'] || '');
            if (authorization.startsWith('Bearer ')) {

                const token = authorization.substring(7, authorization.length);
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                res.locals.decoded = decoded;
                next();
            }
        } catch (error) {

            return res
                .status(401)
                .json({ message: "Auth Failed. Must send valid token" });
        }

    }
}
const roleCheck = (roles: [string]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { decoded } = res.locals;
        const userRole = decoded.userData.role;
        let roleName: string = "";
        if (userRole === "buyer") {
            roleName = "buyer";
        } else if (userRole === "seller") {
            roleName = "seller";
        }
        if (roles.includes(roleName)) {
            next();
        } else {
            return res.status(401).json("No Permission for the role");
        }
    }
}

export { secureAPI, roleCheck }
