import type { Config } from 'jest';


const config: Config = {
  // Jest to transpile TypeScript with ts - jest
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['dotenv/config'],
  // setupFilesAfterEnv: ['<rootDir>/src/setUpTests.ts'],
  "setupFilesAfterEnv": [
    "@testing-library/jest-dom/extend-expect"
  ],
  "testEnvironment": "jsdom",

  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // use because jest do not understand file below as component
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
}

export default config;

