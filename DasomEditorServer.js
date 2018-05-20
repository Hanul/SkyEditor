require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		isDevMode : true,
		
		defaultBoxName : 'DasomEditorServer',
		
		title : 'Dasom Editor',
		
		webServerPort : 8731
	},
	BROWSER_CONFIG : {
		SkyDesktop : {
			theme : 'dark'
		},
		DasomEditor : {
			homepage : 'http://dasomeditor.hanul.co'
		}
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true,
		
		DasomEditorServer : {
			//workspacePath : './workspace',
			workspacePath : '..',
			password : 'test123'
		}
	}
});
