import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const Config = {
  testEnvironment: "jest-environment-jsdom",
};


export default createJestConfig(Config);
