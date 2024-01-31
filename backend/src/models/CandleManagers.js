const AbstractManager = require("./AbstractManager");

class CandleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "candle" });
  }

  // The C of CRUD - Create operation
  async create(candle) {
    // Execute the SQL INSERT query to add a new comment to the "comment" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (candleName, candleDescription, image_url) VALUES (?, ?, ?)`,
      [candle.candleName, candle.candleDescription, candle.imageUrl]
    );

    // Return the ID of the newly inserted comment
    return result.insertId;
  }
  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  async DeletyeById(id) {
    // Execute the SQL DELETE query to remove the user from the "user" table
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    // Return the number of affected rows
    return result.affectedRows;
  }
  // async delete(id) {
  //   ...
  // }
}

module.exports = CandleManager;
