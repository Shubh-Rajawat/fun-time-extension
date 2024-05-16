// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require( 'vscode' );



/**
 * @param {vscode.ExtensionContext} context
 */
function activate( context ) {


	console.log( 'Congratulations, your extension "fun-time" is now active!' );
	// For Joke
	let disposable = vscode.commands.registerCommand( 'fun-time.funtime', function () {
		// The code you place here will be executed every time your command is executed
		fetch( 'https://icanhazdadjoke.com/slack', {
			headers: {
				'Accept': 'application/json'
			}
		} )
			.then( response => {
				return response.json();
			} )
			.then( data => {
				// console.log( data.attachments[ 0 ]?.text ); // Here you can work with the received data
				vscode.window.showInformationMessage( data.attachments[ 0 ]?.text );
			} )
			.catch( error => {
				console.error( 'There was a problem with thefun time:', error );
			} );
		// Display a message box to the user

	} );
	context.subscriptions.push( disposable );

	// Dare code
	let dare = vscode.commands.registerCommand( 'fun-time.dareme', function () {
		// The code you place here will be executed every time your command is executed
		fetch( 'https://api.truthordarebot.xyz/api/dare', {
			headers: {
				'Accept': 'application/json'
			}
		} )
			.then( response => {
				return response.json();
			} )
			.then( data => {
				// console.log( data ); // Here you can work with the received data
				vscode.window.showInformationMessage( data?.question );
			} )
			.catch( error => {
				console.error( 'There was a problem with thefun time:', error );
			} );
		// Display a message box to the user

	} );
	context.subscriptions.push( dare );

	// If anyone wants to add a new feature to this extension you can code the command here and also don't forget to mention it in package.json.

}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
