const jwt = require("jsonwebtoken");
const secret = "$SeCr3tK3Y$";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token)
    res.status(401).json({ error: "Authenticate using correct token" });
  try {
    const data = jwt.verify(token, secret);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Authenticate using correct token" });
  }
};
module.exports = fetchuser;
