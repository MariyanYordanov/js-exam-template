import { engine } from "express-handlebars";

function hbsConfig(app) {
    app.engine('hbs', engine({
        extname: '.hbs',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        },
    }));

    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
}

export default hbsConfig;