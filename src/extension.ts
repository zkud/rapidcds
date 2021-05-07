import * as vscode from 'vscode';
import { generateMockCsv } from './commands/generateMockCsv';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, rapidcds extention is now active!');

	registerCommands(context);
}

function registerCommands(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		'rapidcds.generateMockCsv',
		generateMockCsv,
	);

	context.subscriptions.push(disposable);
}
