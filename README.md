# Shopify_Intern_Challenge



## Demo GIF
![Demo](https://raw.githubusercontent.com/KTMichael/Shopify_Intern_Challenge/main/client/dist/shopify.gif)

## To Run Locally:

### To run the app in production mode:
1. In the terminal, run "npm install" to install all dependencies

2. Change the config.example.js file name to config.js.

3. Open the config.js file and replace "YOUR_API_KEY_HERE" with your personal OpenAI API Key in quotes.

4. Replace the current start script with the below script in the scripts section of the package.json file.
  "start": "webpack && node ./server/index.js"

5. In the terminal run, "npm start"

6. Open http://localhost:3000/ in a browser to view app.

### To run the app in development mode:

1. Replace the current start script with the below script in the scripts section of the package.json file.

2. Change the config.example.js file name to config.js.

3. Open the config.js file and replace "YOUR_API_KEY_HERE" with your personal OpenAI API Key in quotes.

4. "build": "webpack --mode development --watch", "start": "nodemon ./server/index.js"

5. In one terminal run, "npm start"

6. In another terminal run, "npm run build"

7. Open http://localhost:3000/ in a browser to view app.


## Tech Stack:

JavaScript | React | Node/Express | CSS | HTML5 | Webpack | Babel | OpenAI

## Credits:

API | OpenAI | Link: https://beta.openai.com/overview

Robot Picture | Artist: mvolz | Links: Pixabay - https://pixabay.com/users/mvolz-6846069/ Twitter - https://twitter.com/mariellevolz
