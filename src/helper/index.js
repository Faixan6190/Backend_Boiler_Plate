import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  jwt.verify(token, test, (result) => {
    console.log("result", result);
  });
  next();
};

export { authentication };
