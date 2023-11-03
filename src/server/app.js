//app.js
import express from 'express'
import blogPostRouter from './routers/blogpost'

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use('/api/', blogPostRouter)

export default app;