declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      ADMIN_PRIVATE_KEY: string;
      DEFAULT_CHAINID: string;
      REDIS_ENDPOINT: string;
      REDIS_USER: string;
      REDIS_PASSWORD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
