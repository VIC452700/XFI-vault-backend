import { Schema } from "mongoose";

const collectionSchema: Schema = new Schema(
  {
    address: {
      type: String,
      index: {
        unique: true,
      },
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
    cover_picture: {
      type: String,
      required: false,
    },
    total_supply: {
      type: String,
      required: true,
    },
    properties: {
      type: [String],
      required: false,
      default: [],
    },
    visible: {
      type: Boolean,
      default: false,
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
    collection: "collections",
    bufferTimeoutMS: 1000,
  }
);

export default collectionSchema;
