import express, { Request, Response } from "express";
import cors from "cors";

const PORT = 8080;
const app = express();

app.use(cors());

app.get("/", function rootRoute(_, response: Response) {
  response.json([]);
});

app.use(function catchUnknownRoutes(_, response: Response) {
  response.status(404).send("Not Found");
});

app.use(function handleErrors(err: Error, _: Request, response: Response) {
  console.error(err?.stack);
  response.status(500).send(err?.message)
});

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});

export default app;

