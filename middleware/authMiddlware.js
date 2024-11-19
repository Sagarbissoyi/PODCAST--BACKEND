const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = async (req, res,next) => {
      const token = req.cookies.podcasterUserToken;
      try {
        if (token) {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decode.id);
            if(!user)
            {
                return res.status(404).json({message: "User not found"});
            }
            req.user = user;
            next();
        }else{
          res.send("token not found")
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Invalid Token"});
      }
};

module.exports = authMiddleware;










////////////////accio//////////
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// const authMiddleware = async (req, res, next) => {
//     const token = req.cookies.podcasterUserToken; // Ensure the cookie name matches what you set in your sign-in route.

//     // Check if token is present
//     if (!token) {
//         return res.status(401).json({ message: "Access denied. No token provided." });
//     }

//     try {
//         // Verify the token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
//         // Find the user by ID from the decoded token
//         const user = await User.findById(decoded.id);
//         if (!user) {
//             return res.status(404).json({ message: "User  not found" });
//         }

//         // Attach the user to the request object
//         req.user = user;
//         next(); // Proceed to the next middleware or route handler
//     } catch (error) {
//         console.error("Token verification error:", error); // Log the error for debugging
//         return res.status(401).json({ message: "Invalid token" }); // Return a 401 status for invalid token
//     }
// };

// module.exports = authMiddleware;






