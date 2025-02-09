const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  console.log("Middleware triggered!");

  const authHeader = req.headers["authorization"];
  console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("No valid Authorization header found!");
    return res.status(401).json({ message: "Authentication Token Required" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Extracted Token:", token, "Type:", typeof token);

  if (!token || token.trim() === "") {
    console.log("Token is empty or invalid!");
    return res.status(401).json({ message: "Invalid Token" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("JWT Verification Error:", err.message);
      return res
        .status(403)
        .json({ name: "JSONWebTokenError", message: err.message });
    }
    console.log("Token Verified! User:", user);
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
