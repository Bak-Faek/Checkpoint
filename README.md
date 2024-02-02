## Concept

Welcome to our candle collection application, where simplicity reigns supreme. Our sole purpose is to present you with a curated assortment of candles, each accompanied by its name, description, color, and fragrance. No frills, no fuss—just a straightforward display of these luminous gems for you to explore at your leisure. Whether you're drawn to the calming scent of lavender or the invigorating aroma of citrus, our collection offers a diverse range to suit every preference. Enjoy browsing through our selection and let the beauty of these candles brighten your day.

link to trello : https://trello.com/b/YK67yPZ4/checkpoint-4

link to prototype :https://trello.com/b/YK67yPZ4/checkpoint-4

link to modelisation: https://app.diagrams.net/#G1_1hngW4gXwCrEUPRN8iMdw4RPGo6ewYR



## Setup & Use

Just scroll through the application and enjoy each candle! Take your time to appreciate the beauty of every flicker and scent.

### Windows users

Be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm install`
- Create environment files (`.env`) in both `backend` and `frontend`: you can copy `.env.sample` files as starters (**don't** delete them)

command to use at start:

- npm i
- npm run db:migrate
- npm run db:seed

### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools (will be executed on every _commit_, and refuse unclean code)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

## Deployment with Traefik

> ⚠️ Prerequisites : You must have installed and configured Traefik on your VPS beforehand.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- SSH_HOST : IP address of your VPS
- SSH_USER : SSH login to your VPS
- SSH_PASSWORD : SSH connection password to your VPS

And a public variable from the tab `/settings/variables/actions` :

- PROJECT_NAME : the name of the project used to create the subdomain.

> ⚠️ Warning : underscores are not allowed. They can cause trouble with the let's encrypt certificate

Use this same tab to add the other environment variables required for the project if any.

Only the backend will be accessible. The root path `"/"` will redirect to the dist folder on your frontend. In order to allow that, please uncomment the line as explain on `backend/src/app.js` (Line 102).
Because the backend will serve the front, the global variable VITE_BACKEND_URL will be set with an empty string.

Your url will be ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### About the database

The database is automaticaly deployed with the name of your repo. During the build of the projet (`docker-entry.sh`), the `node migrate.js` command is executed in the backend. If you want to seed automaticaly your database using the `seed.js` script, replace the command _build_ on you `backend/package.json` by `node migrate.js && node seed.js`.

### About public assets (pictures, fonts...)

Don't use any public folder on your frontend. This folder won't be accessible online. You may move your public assets in the `backend/public` folder. Prefer [static assets](https://vitejs.dev/guide/assets) when possible.

### About Logs

If you want to access the logs of your online projet (to follow the deployement or to watch any bug error), connect to your VPS (`ssh user@host`).
Then, go on your specific project and run  `docker compose logs -t -f`.
