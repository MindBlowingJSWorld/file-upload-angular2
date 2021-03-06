import * as express from "express";
import * as bodyParser from "body-parser";
import * as _ from "lodash";
import {join} from "path";

import {Configuration} from "./support/configuration";
import {DatabaseClientService} from './common/services/databaseClient.service';

import {FileUploadRouter} from './file-upload/file-upload.router';

var app = express();
var router = express.Router();

app.use(bodyParser.json());   // for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));  // for parsing application/x-www-form-urlencoded

try {
    //Init Configuration and regiuster all routers 
    Configuration.setupConfiguration()
        .then(() => {
            console.log('Configs loded now');
            // Add headers
            app.use(function (req, res, next) {
                // Website you wish to allow to connect
                res.setHeader('Access-Control-Allow-Origin', '*');
                // Request headers you wish to allow
                res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                // Pass to next layer of middleware
                next();
            });

            app.use(function (req, res, next) {
                if (req.path.indexOf('api') !== -1) {
                    var logResp = {
                        'Time': Date.now(),
                        'request api': req.path,
                        'request method': req.method,
                        'request body': req.body,
                        'request paras': JSON.stringify(req.params)
                    };
                    console.log(JSON.stringify(logResp));
                }
                next();
            });

            /**
             * This thing will remain here, I am sure
             */

            app.use(express.static(__dirname));
            app.use('/', express.static(join(__dirname, '../', 'dist')));

            var port = process.env.PORT || 8080;

            // middleware that is specific to this router
            router.use(function (req, res, next) {
                var logResp = {
                    'Time': Date.now(),
                    'request api': req.path,
                    'request method': req.method,
                    'request body': req.body,
                    'request paras': JSON.stringify(req.params)
                };
                console.log(JSON.stringify(logResp));
                next();
            });


            var databaseClientService = new DatabaseClientService();
            databaseClientService.init();

            var fileUploadRouter = new FileUploadRouter();
            fileUploadRouter.init(app);

            app.get('/', router);
            const server = app.listen(port, () => {
                console.log("Server listening on port ", port);
            });
        }, (err) => {
            showError('Unable to start the server, please check the configurations and try again');
            process.exit();
        });
} catch (err) {
    console.log('Error thrown: ', err);
}

function showError(error) {
    console.log('Really sorry for that, something went wrong....');
    console.log(error);
}


