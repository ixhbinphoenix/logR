import * as express from "express";
import * as cfg from "./utils/config";
import * as helmet from "helmet";

const app = express();
app.use(helmet())
app.use(express.json())
let config = cfg.getConfig()

app.post('/auth', async (req, res) => {
  if (req.headers["content-type"] == "application/json") {
    res.statusCode = 501;
    res.send("501: Not Implemented\nAuthentication is not finished")
  } else {
    res.statusCode = 400;
    res.send("400: Bad Request\nInvalid Content Type");
  }
})

app.listen(config.port, () => {
  console.log("Server started")
})