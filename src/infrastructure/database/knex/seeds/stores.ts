import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("stores").del();

  await knex("stores").insert([
    { name: "Store 1" },
    { name: "Store 2" },
    { name: "Store 3" },
  ]);
}
