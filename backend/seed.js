/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Delete tables (remove existing data)
    await database.query("delete from user");

    // Insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into user(username, email, hashedPassword) values (?, ?, ?)",
          [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]
        )
      );
    }
    // Optional: Delete tables (remove existing data)
    await database.query("delete from candle");
    // Insert fake data into the 'candle' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into candle(candleName, candleDescription, image_url) values (?, ?, ?)",
          [faker.lorem.word(), faker.lorem.sentence(), faker.internet.url()]
        )
      );
    }

    // Optional: Delete tables (remove existing data)
    await database.query("delete from perfume");
    // Insert fake data into the 'perfume' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into perfume(perfumeName, perfumeDescription) values (?, ?)",
          [faker.lorem.word(), faker.lorem.sentence()]
        )
      );
    }

    // Optional: Delete tables (remove existing data)
    await database.query("delete from color");
    // Insert fake data into the 'color' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into color(colorName, colorDescription) values (?, ?)",
          [faker.lorem.word(), faker.lorem.sentence()]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
