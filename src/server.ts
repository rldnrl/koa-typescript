import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import KoaLogger from "koa-logger";
import config from "./config";

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(KoaLogger());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening PORT: ${PORT}`);
  })
  .on("error", (error) => {
    console.error(error);
  });

export default server;
