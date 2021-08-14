module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components",
    "^helpers(.*)$": "<rootDir>/src/helpers",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
};