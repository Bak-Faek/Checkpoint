/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

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
    await database.query("delete from perfume");
    // Insert data into the 'perfume' table

    queries.push(
      database.query(
        `insert into perfume(perfumeName, perfumeDescription)  
        values 
        ("Vanille épicée", "Le parfum de vanille épicée mêle la douceur réconfortante de la vanille à des notes épicées envoûtantes. Il diffuse un arôme délicieusement séduisant qui emplit l'air de confort et de sophistication."),
        ("Brise Marine", "Le parfum Brise Marine mêle des notes fraîches et salées, évoquant le vent marin qui caresse la peau et l'air vivifiant chargé d'embruns. C'est un parfum revitalisant qui transporte instantanément vers les rivages de l'océan."),
        ("Fleur de Cerisier","Le parfum de Fleur de Cerisier mêle des notes florales douces et sucrées, rappelant le parfum délicat des cerisiers en fleurs au printemps. C'est un parfum léger et aérien qui évoque la beauté éphémère de la saison printanière."),
        ("Bois de Santal et Patchouli", "Le parfum de Bois de Santal et Patchouli mêle des notes boisées riches et terreuses, évoquant la profondeur des forêts anciennes et la sensualité de la nuit. C'est un parfum envoûtant qui invite à l'introspection et à la relaxation, en captivant les sens."),
        ("Citronnelle et Menthe Fraîche", " Le parfum de Citronnelle et Menthe Fraîche mêle des notes citronnées piquantes à la fraîcheur vivifiante de la menthe. C'est un parfum rafraîchissant et revigorant qui évoque les soirées estivales animées et les moments de détente sous le soleil chaud.")`
      )
    );

    // Optional: Delete tables (remove existing data)
    await database.query("delete from color");
    // Insert data into the 'color' table

    queries.push(
      database.query(
        `insert into color(colorName, colorDescription)
        values 
        ("Ambre doré", "Description de la couleur : La couleur ambre doré de cette bougie rappelle les riches teintes dorées du coucher de soleil, évoquant une ambiance chaleureuse et apaisante."),
        ("Bleu Azur", "Le bleu azur de cette bougie rappelle le ciel dégagé d'une journée d'été et les eaux cristallines de l'océan. C'est une couleur qui apaise l'esprit et évoque la sérénité."),
        ("Rose Poudré", "Le parfum de Fleur de Cerisier mêle des notes florales douces et sucrées, rappelant le parfum délicat des cerisiers en fleurs au printemps. C'est un parfum léger et aérien qui évoque la beauté éphémère de la saison printanière."),
        ("Noir Ébène", "Le noir ébène de cette bougie évoque l'obscurité profonde de la nuit, parsemée d'étoiles scintillantes. C'est une couleur mystérieuse et élégante qui intrigue et fascine."),
        ("Jaune Soleil", "Le jaune soleil de cette bougie rappelle la lumière dorée et éclatante du soleil estival. C'est une couleur qui inspire la chaleur, la joie et l'optimisme.")`
      )
    );

    // Optional: Delete tables (remove existing data)
    await database.query("delete from candle");
    // Insert data into the 'candle' table
    queries.push(
      database.query(
        `insert into candle(candleName, candleDescription, imageUrl, perfume_id, color_id) 
                    values 
                    ("Éclat d'Ambre", "La bougie Éclat d'Ambre évoque la chaleur et la sophistication. Son éclat subtil illumine n'importe quel espace, créant une atmosphère accueillante et élégante.", "https://ideogram.ai/api/images/direct/wCrr1cwjRPOFz9OFVRJKKA.jpg", 1, 1),
                    ("Brise Marine", "La bougie Brise Marine capture l'esprit rafraîchissant et revigorant de l'océan. Son parfum vivifiant et sa couleur apaisante évoquent la sensation de liberté et de pureté que l'on ressent au bord de la mer.", "https://ideogram.ai/api/images/direct/Rt6rssoPRCGs_mOcGBBjIg.jpg", 2, 2),
                    ("Douceur Printanière", "La bougie Douceur Printanière évoque la renaissance de la nature au printemps. Son parfum délicat et sa couleur douce inspirent la fraîcheur et la légèreté des premiers jours ensoleillés.", "https://ideogram.ai/api/images/direct/-a-s_1dQRNepdHIb2IoxVQ.jpg", 3, 3),
                    ("Nuit Mystique", "La bougie Nuit Mystique capture l'essence envoûtante de la nuit, emplie de mystère et de promesses. Son parfum envoûtant et sa couleur sombre créent une ambiance intrigante et captivante.", "https://ideogram.ai/api/images/direct/moZn4m0hTK6Eeo1LrYvpYw.jpg" , 4, 4),
                    ("Brise d'Été", "La bougie Brise d'Été évoque la fraîcheur et la légèreté des journées estivales. Son parfum vivifiant et sa couleur vibrante évoquent la joie et la vitalité de la saison estivale.", "https://ideogram.ai/api/images/direct/7XHEwFenRI6C1iBFCldmXA.jpg",5, 5)`
      )
    );

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
