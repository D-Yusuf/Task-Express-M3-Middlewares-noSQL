const express = require('express');
const path = require("path")
const app = express();
const postsRoutes = require('./api/posts/posts.routes');
const connectDb = require('./database');
const morgan = require('morgan');
const notFound = require('./middleware/notFoundHandle');
const errorHandler = require('./middleware/errorHandler');
require("dotenv").config()
connectDb();
app.use(express.json());
app.use(morgan("dev"))


app.use(errorHandler)
app.use('/api/posts', postsRoutes);
app.use("/media", express.static(path.join(__dirname, "/media")))

app.use(notFound)

app.listen(process.env.PORT, () => {
  console.log('The application is running on localhost:8000');
});
