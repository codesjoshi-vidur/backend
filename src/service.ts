import { createApp } from "./app.ts";
import { env } from "./config.ts";

const app = createApp();

app.listen(env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${env.PORT}`);
});
