class Config {
    constructor(
        triggers,
        events,
        server
    ) {
        this.triggers = triggers;
        this.events = events;
        this.server = server;

    }

    getTriggers() {
        return this.triggers
    }

    getEventByName(name) {
        return this.events.find(event => event.name === name);
    }

    getServerPort() {
        return this.server.port;
    }

    getServerPassword() {
        if (this.server.password) return this.server.password;
        return ''
    }

    getPersonalAccessTokenGitlab() {
        return this.server.personalAccessTokenGitlab;
    }

}
module.exports = Config;
