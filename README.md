# Fx rates of the Mexican peso against other currencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The project stack

1) React
2) Webpack
3) CSS
4) Fixer API visit: https://fixer.io/documentation

## Order of the graphs

blue: MXN
orange: USD
green: GBP
red: EUR
magenta: RUB   

# Steps
1. Get a Free Fixer Access Token

Go to fixer.io and create an account. After signup, you will receive an access token immediately. If you plan on using less than 1000 requests per month, your account will be completely free. If you need more or want to use some of our new features, you’ll need to choose one of the paid options.

2. Replace API URL and add Access Key

The new API comes with a new endpoint and now requires an access key in the GET URL. Please change your API URL from api.fixer.io to https://data.fixer.io/api and attach your newly generated access key to the URL as a GET parameter named „access_key“.

Example

If your old API Call was https://api.fixer.io/latest then your new integration should point to: https://data.fixer.io/api/latest?access_key=YOUR_ACCESS_KEY

WARNING: API_KEY must be in .env and this file must not be uploaded to github. But for development purposes and easy setup of the project. Ommit it to .gitignore file.

### `npm start`

This runs webpack.config.dev.js file and open \
the app in the development mode in http://localhost:8000 \ 
to view it in the browser.

The page will reload if you make edits.\

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

This runs webpack.config.prod.js file and open \
build an app for production, this minifies the files and \
create a dist folder which includes a main.js, index.html and \
an assets folder that contains the image for browsers compatibility

### Deployment

This project is deploy in AWS S3 Bucket \
and contains a CI/CD in AWS Codebuild. \
See the demo by visiting: 