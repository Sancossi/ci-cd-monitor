class AbstractConfigLoader {
    constructor() {
        this.config = undefined;
    }

    async loadConfig() {
        throw new Error('Implement loadConfig()');
    }

    getConfig() {
        return this.config;
    }

    setConfigDefaults(config) {
        if (this.__isNotAnObject(config)) {
            throw new Error('Loaded config is not an object');
        }

        if (this.__isNotAnArray(config.triggers)) {
            config.triggers = [];
        }

        if (this.__isNotAnArray(config.events)) {
            config.events = [];
        }

    }

    validate(config) {
        if (this.__isNotAnObject(config)) {
            throw new Error('Loaded config is not an object');
        }

        if (this.__isNotAnArray(config.triggers)) {
            throw new Error('Loaded config section invalid: triggers');
        }

        if (this.__isNotAnArray(config.events)) {
            throw new Error('Loaded config section invalid: events');
        }

        if (this.__isNotAnObject(config.server)) {
            throw new Error('Loaded config section invalid: server');
        }


    }

    __isNotAnObject(value) {
        return typeof value !== 'object' || value === null || Array.isArray(value);
    }

    __isNotAnArray(value) {
        return !Array.isArray(value);
    }
}

module.exports = AbstractConfigLoader;
