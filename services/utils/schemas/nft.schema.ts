import { Schema } from "mongoose";

const nftSchema: Schema = new Schema(
  {
    collection_address: {
      type: String,
      require: true,
    },

    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    animation_url: {
      type: String,
      required: true,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "nfts",
    bufferTimeoutMS: 1000,
  }
);

export default nftSchema;
