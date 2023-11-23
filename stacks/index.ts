import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";
import { APIStack } from "./APIStack";
import "dotenv/config";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    environment: {
      MONGO_URI: process.env.MONGO_URI || "",
    },
    // bundle: {
    //   format: "esm",
    // },
  });
  app.stack(APIStack);
  // app.stack(MyStack);
}
