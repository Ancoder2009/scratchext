console.log("Loading testforscrblx-1.0.0");
console.log("Loading game engine!");

class gameengine {
	constructor(runtime, extensionId) {
		this.runtime = runtime;
	}
	
	getinfo(){
		return {
			id: 'gameengine',
			name: 'Game Engine',
			blocks: [
				{
					opcode: 'uploadgame',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Upload a game to server: [server] With password: [password] data=[data]',
					arguments: {
						server: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'https://server.example.com'
						},
						
						password: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'PSWD'
						},
						
						data: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'DATA'

						}
					}
				}
			] 
		}
	}
	uploadgame(args) {
		fetch(args.server, {
    			method: 'post',
    			headers: {
      				"Content-type": "application/json;"
    			},
    			body: {
				"data": args.data,
				"password": args.password,
			}
  		})
  		.then(json)
  		.then(function (data) {
		 console.log('Request succeeded with JSON response', data);
  		})
		.catch(function (error) {
    		 console.log('Request failed', error);
  		});
	}
}
