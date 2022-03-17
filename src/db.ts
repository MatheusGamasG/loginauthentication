import { Pool } from "pg";

const connectionString = 'postgres://jnlacroi:8cyE9wmDFso4xd1L2Pw7fz1qrNmV9UHl@tuffi.db.elephantsql.com/jnlacroi';
const db = new Pool({ connectionString });

export default db;