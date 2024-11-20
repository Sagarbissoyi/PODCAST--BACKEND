const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userApi = require("./routes/user");
const CatApi = require("./routes/categories");
const PodcastApi = require("./routes/podcast");
const cors = require("cors");
const conn  = require("./conn/conn");


require("dotenv").config();
require("./conn/conn");
app.use(
  cors({
    origin: "https://podcast-frontend-k6dgxnth7-sagars-projects-d57435ad.vercel.app",
    credentials: true,
  }));



  conn()
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
res.send("working")
})
app.use("/uploads",express.static("uploads"));

//all routes
app.use("/api/v1",userApi);
app.use("/api/v1",CatApi);
app.use("/api/v1",PodcastApi );

app.listen(process.env.PORT, () => {
  console.log(`Sever started on port : ${process.env.PORT}`);
});


// npm create vite@latest frontend;




























// // Import necessary modules
// const conn = require("./conn/conn.js")
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// require("dotenv").config();

// // Import your routes
// const userApi = require("./routes/user");
// const CatApi = require("./routes/categories");
// const PodcastApi = require("./routes/podcast");

// // Initialize the app
// const app = express();
// conn()
// // Configure CORS with credentials support
// app.use(
//   cors({
//     origin: "http://localhost:5173/", // Frontend URL
//     credentials: true, // Allow cookies and credentials
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowable methods
//     allowedHeaders: ["Content-Type", "Authorization"], // Allowable headers
//   })
// );

// // Middleware setup
// app.use(express.json()); // For parsing JSON payloads
// app.use(cookieParser()); // For handling cookies
// app.use("/uploads", express.static("./uploads")); // Static file hosting for uploads


// // Route setup
// app.use("/api/v1", userApi);
// app.use("/api/v1", CatApi);
// app.use("/api/v1", PodcastApi);

// // Root endpoint for health check
// app.get("/", (req, res) => {
//   res.send("Server is working");
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port : ${PORT}`);
// });

// module.exports = app;










































///////////////////////////////////////////////////////////////

// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// const userApi = require("./routes/user");
// const CatApi = require("./routes/categories");
// const PodcastApi = require("./routes/podcast");
// const cors = require("cors");
// require("dotenv").config();
// require("./conn/conn");

// // CORS Configuration
// app.use(
//   cors({
//     origin: ["http://localhost:5173"], // Adjust this to your frontend URL
//     credentials: true,
//   })
// );

// // Middleware
// app.use(express.json()); // For parsing application/json
// app.use(cookieParser()); // For parsing cookies
// app.use("/uploads", express.static("uploads")); // Serve static files from the uploads directory

// // All routes
// app.use("/api/v1", userApi); // User routes
// app.use("/api/v1", CatApi); // Category routes
// app.use("/api/v1", PodcastApi); // Podcast routes

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log(`Server started on port: ${process.env.PORT}`);
// });
