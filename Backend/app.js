const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const mongoUrl =
  "mongodb+srv://admin:admin@cluster0.hrt9lth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });

require("./UserDetails");
const User = mongoose.model("UserInfo");

app.get("/", (req, res) => {
  res.send({ status: "Started" });
});

app.post("/register", async (req, res) => {
  const { email, password, styleMusique } = req.body;

  try {
    await User.create({
      email: email,
      password: password,
      styleMusique: styleMusique,
    });
    res.send({ status: "Ok", data: "Utilisateur crée" });
  } catch (error) {
    res.send({ status: "Erreur", data: error });
  }
});

app.listen(5001, () => {
  console.log("Node js server started");
});
