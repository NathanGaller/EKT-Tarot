const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const appTemplatePath = path.join(__dirname, 'app.template.json');
const appJsonPath = path.join(__dirname, 'app.json');

const appTemplate = fs.readFileSync(appTemplatePath, 'utf8');

const appConfig = appTemplate.replace(/(GOOGLE_CLIENT_ID|ANDROID_CLIENT_ID)/g, variable => process.env[variable]);

fs.writeFileSync(appJsonPath, appConfig);