import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());

const ServiceSchema = new Schema({
  icon: String,
  title: String,
  text: String,
});

const ServiceModel = mongoose.model("services", ServiceSchema);

app.get("/services", async (req, res) => {
  const services = await ServiceModel.find({});
  res.send(services);
});

app.get("/services/:id", async (req, res) => {
  const { id } = req.params;
  const service = await ServiceModel.find(id);
  res.send(service);
});

app.post("/services", async (req, res) => {
  const { icon, title, text } = req.body;
  const newService = new ServiceModel({ icon, title, text });
  await newService.save();
  res.send("Got a POST request");
});

app.put("/services/:id", async (req, res) => {
  const { id } = req.params;
  const { icon, title, text } = req.body;
  const service = await ServiceModel.findByIdAndUpdate(id, {
    icon,
    title,
    text,
  });
  res.send("Got a PUT request at /service");
});

app.delete("/services/:id", async (req, res) => {
  const { id } = req.params;
  const service = await ServiceModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /service");
});

mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
