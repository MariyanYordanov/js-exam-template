import { engine } from "express-handlebars";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function hbsConfig(app) {
    app.engine('hbs', engine({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, '../views/layouts/'),
        partialsDir: path.join(__dirname, '../views/partials/'),
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        },
        helpers: {},
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));
}

export default hbsConfig;