import { Client } from "pg";

export async function getClient() {
  const client = new Client("postgres://lqgyqenl:eU73SPM9RyUdbjKJFSmplEbIMpqKzhxq@trumpet.db.elephantsql.com/lqgyqenl");
  await client.connect();
  return client;
}
