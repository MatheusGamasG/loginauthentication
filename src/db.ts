import { Pool } from "pg";

const connectionString = 'databaselink';
const db = new Pool({ connectionString });

export default db;