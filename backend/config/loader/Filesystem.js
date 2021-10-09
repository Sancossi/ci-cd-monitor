const fs = require('fs');
const path = require('path');


const AbstractConfigLoader = require('./AbstractConfigLoader');
const Config = require("../Config");

class Filesystem extends AbstractConfigLoader {
    async loadConfig() {
        console.log('[Config] Load config for filesystem');
        try {
            const config = await this.__loadConfigFromFilesystem();
            await this.setConfigDefaults(config);
            await this.validate(config);

            this.config = new Config(
                config.triggers,
                config.events,
                config.server
            );
            console.log('[Config] Loaded');
        } catch (e) {
            console.error(`[Config] [Error] ${e.toString()}`);
            process.exit(1);
        }
    }

    async __loadConfigFromFilesystem() {
        const f = path.resolve(
            `${__dirname}/..//../../config/config.json`
        );
        return JSON.parse(await fs.readFileSync(f));
    }
}

module.exports = new Filesystem();

