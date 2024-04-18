import jwt from "jsonwebtoken";

const UNPROTECTED_PATH = ["/users/login"];

const isPathUnprotected = (path) => {
  return UNPROTECTED_PATH.includes(path);
};

const authMiddleware = (req, res, next) => {
  if (isPathUnprotected(req.path)) {
    next();
    return;
  }

  // protected paths need to be authorized by token
  const authorizationHeader = req.get("Authorization");

  if (!authorizationHeader || !authorizationHeader.startsWith("JWT ")) {
    return res.status(401).json({
      result: false,
      message: "Invalid authorization header",
    });
  }

  const token = authorizationHeader.replace("JWT ", "");

  if (!token) {
    return res.status(401).json({
      result: false,
      message: "Authorization token not found",
    });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({
      result: false,
      message: "Invalid Token",
    });
  }
};

export default authMiddleware;