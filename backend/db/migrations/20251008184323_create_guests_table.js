/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("guests", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.enu("attending", ["Այո", "Ոչ"]).notNullable();
    table.enu("side", ["ժաննայի", "Կարենի"]).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("guests");
}
