SET
  FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS user;

CREATE TABLE
  user (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hashedPassword VARCHAR(255) NOT NULL
  );

DROP TABLE IF EXISTS candle;

CREATE TABLE
  candle (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    candleName VARCHAR(50) NOT NULL,
    candleDescription VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(255),
    perfume_id INT,
    color_id INT,
    CONSTRAINT perfume_id FOREIGN KEY (perfume_id) REFERENCES perfume (id),
    CONSTRAINT color_id FOREIGN KEY (color_id) REFERENCES color (id)
  );

DROP TABLE IF EXISTS perfume;

CREATE TABLE
  perfume (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    perfumeName VARCHAR(50) NOT NULL,
    perfumeDescription VARCHAR(255) NOT NULL
  );

DROP TABLE IF EXISTS color;

CREATE TABLE
  color (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    colorName VARCHAR(50) NOT NULL,
    colorDescription VARCHAR(255) NOT NULL
  );

SET
  FOREIGN_KEY_CHECKS = 1;