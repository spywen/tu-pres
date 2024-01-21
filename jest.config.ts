import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testMatch: ["**/?(*.)+((good|bad|base).spec).[jt]s?(x)"]
};

export default config;