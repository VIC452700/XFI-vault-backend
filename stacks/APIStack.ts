import { Api, App, Stack } from "@serverless-stack/resources";

export default class APIStack extends Stack {
  constructor(scope: App, id: string) {
    const URI = process.env.MONGO_URI;
    if (!URI) {
      throw new Error(
        "The MONGO_URI environment variable must be configured with the connection string " +
          "to the database."
      );
    }
    super(scope, id);
    const api = new Api(this, "Api", {
      routes: {
        "GET /": "functions/lambda.handler",
        "POST /collections/create": "api/v2/collections.create",
        "POST /collections/refresh": "api/v2/collections.refresh",
        "POST /collections/configure-filter":
          "api/v2/collections.configureFilter",
        "POST /collections/nfts": "api/v2/collections.filter",
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
