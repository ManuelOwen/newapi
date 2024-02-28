import dotenv from "dotenv";
import assert from "assert";
dotenv.config();

const {
  PORT
} = process.env;

// const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT is required");

const config = {
  port: PORT,
};

export default config;