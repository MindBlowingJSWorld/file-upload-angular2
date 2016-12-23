'use strict';
import { PromisedIO } from "./promisified-io";
import { join } from "path";

export class Configuration {

    static mongoDbUrl: string;
    static fileUploadPath: string;

    static async setupConfiguration() {
        return new Promise((resolve, reject) => {
            PromisedIO.readFile(join(__dirname, '../','config.json'))
            .then((configFile) => {
                var configFileJson = JSON.parse(configFile);
                Configuration.fileUploadPath = configFileJson.fileUploadPath;

                var urlFromConfigFile = configFileJson.MONGO_DB_URL;
                if (process.env.MONGO_DB_URL && process.env.MONGO_DB_URL !== undefined) {
                    Configuration.mongoDbUrl = process.env.MONGO_DB_URL;
                } else {
                    Configuration.mongoDbUrl = urlFromConfigFile;
                }


                resolve();
            }, err => {
                console.log('Something wrong with config file, please check \'config.json\' configuration');
                reject();
            })
        });

    }



}

