import jwt from "jsonwebtoken";

// TODO: Remove campaigns from unprotected paths
const UNPROTECTED_PATH = [
  "/api/v1/login/",
  "/api/v1/ngos/list/",
  "/api/v1/campaigns/",
  "/admins/complaints/dashboard/",
  "/api/v1/complaints/",
];

const isPathUnprotected = (path) => {
  console.log(path);
  // Check for a regex match
  for (const unprotectedPath of UNPROTECTED_PATH) {
    if (path.match(unprotectedPath)) {
      return true;
    }
  }
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
