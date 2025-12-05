class AgentBase {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    async run(input) {
        throw new Error('run() method must be implemented');
    }

    explainDecision(output) {
        throw new Error('explainDecision() method must be implemented');
    }
}

module.exports = AgentBase;
