const JWT = require("jsonwebtoken");

// Artist Authentication Middleware
async function authArtist(req, res, next) {
  const token = req.cookies.token;

  // check token
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    // verify token
    const decoded = JWT.verify(
      token,
      process.env.JWT_SECRET
    );

    // check role
    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You do not have access",
      });
    }

    // save user data in request
    req.user = decoded;

    // move to next middleware
    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
}

// User Authentication Middleware
async function authUser(req, res, next) {
  const token = req.cookies.token;

  // check token
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    // verify token
    const decoded = JWT.verify(
      token,
      process.env.JWT_SECRET
    );

    // allow both user and artist
    if (
      decoded.role !== "user" &&
      decoded.role !== "artist"
    ) {
      return res.status(403).json({
        message: "You do not have access",
      });
    }

    // save decoded user
    req.user = decoded;

    // next middleware
    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = {
  authArtist,
  authUser,
};