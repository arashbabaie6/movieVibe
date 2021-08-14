module.exports = {
  // transform: {'^.+\\.(js|jsx)$/': 'babel-jest'},
  setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components",
    "^helpers(.*)$": "<rootDir>/src/helpers",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
};

// public: path.resolve(__dirname, "public"),
// helpers: path.resolve(__dirname, "src/helpers"),

// jest.config.js
// module.exports = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/.storybook/'],
//   moduleNameMapper: {
//     '@/components/(.*)': '<rootDir>/src/components/$1',
//     '@/redux/(.*)': '<rootDir>/src/redux/$1',
//     '@/services/(.*)': '<rootDir>/src/services/$1',
//     '@/layouts/(.*)': '<rootDir>/src/layouts/$1',
//     '@/data/(.*)': '<rootDir>/src/data/$1',
//     '@/utils/(.*)': '<rootDir>/src/utils/$1',
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//   },
//   testEnvironment: 'jsdom',
//   // transform: {
//   //   '^.+\\.(js|jsx|ts|tsx)$/': '<rootDir>/node_modules/babel-jest',
//   //   '/^.+.(css|less|sass|scss)$': 'identity-obj-proxy',
//   // },
// };
