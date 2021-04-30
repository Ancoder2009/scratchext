class SaveEngine {
    constructor (runtime) {
        this.runtime = runtime;
    }
    getInfo () {
        return {
            id: 'SaveEngine',
            name: 'Save Engine',
            blocks: [
                {
                    opcode: 'save',
                    blockType: Scratch.BlockType.COMMAMD,
                    text: 'Send [data] to [server]',
                    arguments: {
                        data: {
                            type: ArgumentType.STRING,
                            defaultValue: '1'
                        },
                        server: {
                            type: ArgumentType.STRING,
                            defaultValue: 'text'
                        }
                    }
                }
            ]
        };
    }
    save(args) {
    
    }
}

Scratch.extentions.Register(new SaveEngine)
