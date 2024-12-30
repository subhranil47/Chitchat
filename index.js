const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");

const io = new Server(server);

async function connectToDb(url) {
  await mongoose
    .connect(url)
    .then(() => console.log("connected to Database"))
    .catch((err) => console.log("connection error", err));
}

connectToDb(
  "mongodb+srv://subhranil234:Patricks123@cluster0.kt6qf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.render("Frontpage");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(5000, () => {
  console.log("server started");
});
