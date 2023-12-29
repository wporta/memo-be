import { cleanEnv, port, str } from 'envalid';

export default cleanEnv(process.env, {
  PORT: port(),
  MONGO_CONNECTION_STRING: str(),
});
