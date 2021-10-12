import * as express from "express";
import * as cfg from "./utils/config";
import * as helmet from "helmet";
import {compare as compareBcrypt} from "bcryptjs"
import { validateAuthType } from "./lib/validation";
import { genToken } from "./utils/auth";

const app = express()
app.use(helmet())
app.use(express.json())
let config = cfg.getConfig()

app.post('/auth', async (req, res) => {
  if (req.headers["content-type"] == "application/json") {
    if (validateAuthType(req.body)) {
      // TODO: Get hash from DB and compare to user-sent hash
      // SELECT (hash) FROM users WHERE username=req.body.username
      if ((await compareBcrypt(req.body.hash, "$2a$16$o6N167jirFgTm8ZowtyKdu7.xtSTFgd8GXf7qfz50naOKryF6/LQ2"))) {
        const token = await genToken()
        // TODO: Insert token into DB
        res.statusCode = 200
        res.cookie("session-token", token.token, {
          secure: true,
          httpOnly: true,
          expires: token.expires,
          sameSite: "strict"
        })
        res.send("")
      } else {
        res.statusCode = 401
        res.send("401: Unauthorized\nInvalid username or Password")
      }
    } else {
      res.statusCode = 400
      res.send("400: Bad Request\nInvalid Request Body")
    }
  } else {
    res.statusCode = 400
    res.send("400: Bad Request\nInvalid Content Type")
  }
})

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`)
})