module.exports = {

	//---------------------------------------------------------------------
	// Action Name
	//
	// This is the name of the action displayed in the editor.
	//---------------------------------------------------------------------

	name: "Store Bot Client Info",

	//---------------------------------------------------------------------
	// Action Section
	//
	// This is the section the action will fall into.
	//---------------------------------------------------------------------

	section: "Bot Client Control",

	//---------------------------------------------------------------------
	// Action Subtitle
	//
	// This function generates the subtitle displayed next to the name.
	//---------------------------------------------------------------------

	subtitle: function (data) {
		const info = ['Uptime in Milliseconds', 'Ready At?', 'Ping', 'Guild Amount', 'User Amount', 'Rounded Ping', 'Uptime in Seconds', 'Uptime in Minutes', 'Bot\'s Token', 'Voice Connections Amount', 'Total Amount of Channels', 'Total Amount of Emojis', 'Bot\'s Previous Pings', 'Uptime in Days', 'Uptime in Days (Rounded)', 'Memory (RAM) Usage', 'Bot Guilds Objects', 'Bot Guilds Names', 'Bot Guilds IDs', 'Bot Current Prefix', 'Bot Client ID', 'Discord JS Version', 'Uptime in Hours', 'Refreshing Uptime in Days', 'Refreshing Uptime in Hours', 'Refreshing Uptime in Minutes', 'Refreshing Uptime in Seconds', 'Memory (RAM) Usage in MB', 'Bot\'s OS (Process Platform)', 'CPU Usage in MB', 'Bot\'s Directory', 'Node JS Version', 'Amount of Commands', 'Amount of Events', 'Ready At ? [timestamp]'];
		return `Bot Client - ${info[parseInt(data.info)]}`;
	},

	//---------------------------------------------------------------------
	// DBM Mods Manager Variables (Optional but nice to have!)
	//
	// These are variables that DBM Mods Manager uses to show information
	// about the mods for people to see in the list.
	//---------------------------------------------------------------------

	// Who made the mod (If not set, defaults to "DBM Mods")
	author: "Lasse, EliteArtz and EGGSY",

	// The version of the mod (Defaults to 1.0.0)
	version: "1.8.7",

	// A short description to show on the mod line for this mod (Must be on a single line)
	short_description: "Stores Bot Information like Ping, Total Members or Guilds...",

	// If it depends on any other mods by name, ex: WrexMODS if the mod uses something from WrexMods


	//---------------------------------------------------------------------

	//---------------------------------------------------------------------
	// Action Storage Function
	//
	// Stores the relevant variable info for the editor.
	//---------------------------------------------------------------------

	variableStorage: function (data, varType) {
		const type = parseInt(data.storage);
		if (type !== varType) return;
		const info = parseInt(data.info);
		let dataType = 'Unknown Type';
		switch (info) {
			case 0:
				dataType = "Number";
				break;
			case 1:
				dataType = "Date";
				break;
			case 2:
				dataType = "Number";
				break;
			case 3:
				dataType = "Number";
				break;
			case 4:
				dataType = "Number";
				break;
			case 5:
				dataType = "Number";
				break;
			case 6:
				dataType = "Number";
				break;
			case 7:
				dataType = "Number";
				break;
			case 8:
				dataType = "Token";
				break;
			case 9:
				dataType = "Number";
				break;
			case 10:
				dataType = "Number";
				break;
			case 11:
				dataType = "Number";
				break;
			case 12:
				dataType = "Number";
				break;
			case 13:
				dataType = "Time";
				break;
			case 14:
				dataType = "Time";
				break;
			case 15:
				dataType = "Number";
				break;
			case 16:
				dataType = "Guild";
				break;
			case 17:
				dataType = "Guild Name";
				break;
			case 18:
				dataType = "Guild ID";
				break;
			case 19:
				dataType = "Bot Tag";
				break;
			case 20:
				dataType = "Bot ID";
				break;
			case 21:
				dataType = "Version Number";
				break;
			case 22:
				dataType = "Number";
				break;
			case 23:
				dataType = "Time";
				break;
			case 24:
				dataType = "Time";
				break;
			case 25:
				dataType = "Time";
				break;
			case 26:
				dataType = "Time";
				break;
			case 27:
				dataType = "Number";
				break;
			case 28:
				dataType = "OS Name";
				break;
			case 29:
				dataType = "Number";
				break;
			case 30:
				dataType = "Directory";
				break;
			case 31:
				dataType = "Version Number";
				break;
			case 32:
				dataType = "Number";
				break;
			case 33:
				dataType = "Number";
				break;
			case 34:
				dataType = "Number";
				break;
		}
		return ([data.varName2, dataType]);
	},

	//---------------------------------------------------------------------
	// Action Fields
	//
	// These are the fields for the action. These fields are customized
	// by creating elements with corresponding IDs in the HTML. These
	// are also the names of the fields stored in the action's JSON data.
	//---------------------------------------------------------------------

	fields: ["info", "storage", "varName2"],

	//---------------------------------------------------------------------
	// Command HTML
	//
	// This function returns a string containing the HTML used for
	// editting actions.
	//
	// The "isEvent" parameter will be true if this action is being used
	// for an event. Due to their nature, events lack certain information,
	// so edit the HTML to reflect this.
	//
	// The "data" parameter stores constants for select elements to use.
	// Each is an array: index 0 for commands, index 1 for events.
	// The names are: sendTargets, members, roles, channels,
	//                messages, servers, variables
	//---------------------------------------------------------------------

	html: function (isEvent, data) {
		return `
		<div>
			<p>
				<u>Mod Info:</u><br>
				Created by EliteArtz, EGGSY and Lasse!
			</p>
		</div><br>
	<div style="float: left; width: 80%; padding-top: 8px;">
		Source Info:<br>
		<select id="info" class="round">
			<option value="23">Refreshing Uptime in Days</option>
			<option value="24">Refreshing Uptime in Hours</option>
			<option value="25">Refreshing Uptime in Minutes</option>
			<option value="26">Refreshing Uptime in Seconds</option>
			<option value="1">Ready at</option>
			<option value="34">Ready at [unix timestamp]</option>
			<option value="2">Ping</option>
			<option value="5">Ping Rounded</option>
			<option value="12">Bots Previous Pings</option>
			<option value="9">Total Voice Connections</option>
			<option value="27">Memory (RAM) Usage in MB</option>
			<option value="21">Discord JS Version</option>
			<option value="29">CPU Usage in MB</option>
			<option value="3">Total Amount of Guilds</option>
			<option value="4">Total Amount of Users</option>
			<option value="10">Total Amount of Channels</option>
			<option value="11">Total Amount of Emojis</option>
            <option value="32">Total Amount of Commands</option>
            <option value="33">Total Amount of Events</option>
			<option value="16">Bot Guilds Objects</option>
			<option value="17">Bot Guilds Names</option>
			<option value="18">Bot Guilds IDs</option>
			<option value="19">Bot Current Prefix</option>
			<option value="20">Bot Client ID</option>
			<option value="28">Bot OS (Process Platform)</option>
			<option value="30">Bot Directory</option>
			<option value="8">Bot Token</option>
			<option value="31">Node JS Version</option>
		</select>
	</div><br><br><br>
	<div>
		<div style="float: left; width: 35%; padding-top: 8px;">
			Store In:<br>
			<select id="storage" class="round">
				${data.variables[1]}
			</select>
		</div>
		<div id="varNameContainer2" style="float: right; width: 60%; padding-top: 8px;">
			Variable Name:<br>
			<input id="varName2" class="round" type="text"><br>
		</div>
	</div><br><br>`
	},

	//---------------------------------------------------------------------
	// Action Editor Init Code
	//
	// When the HTML is first applied to the action editor, this code
	// is also run. This helps add modifications or setup reactionary
	// functions for the DOM elements.
	//---------------------------------------------------------------------

	init: function () { },

	//---------------------------------------------------------------------
	// Action Bot Function
	//
	// This is the function for the action within the Bot's Action class.
	// Keep in mind event calls won't have access to the "msg" parameter,
	// so be sure to provide checks for variable existance.
	//---------------------------------------------------------------------

	action: function (cache) {
		const botClient = this.getDBM().Bot.bot;
		const dibiem = this.getDBM(); //EliteArtz... really???? Ugh you guys are meme
		const data = cache.actions[cache.index];
		const info = parseInt(data.info);
		const msToDay = (1000 * 60 * 60 * 24); // Really? Lasse? Did you really forget this? - :blobshh:
		if (!botClient) {
			this.callNextAction(cache);
			return;
		}
		switch (info) {
			case 0:
				result = botClient.uptime; //Deprecated in 1.8.5
				break;
			case 1:
				result = botClient.readyAt;
				break;
			case 2:
				result = botClient.ping;
				break;
			case 3:
				result = botClient.guilds.array().length;
				break;
			case 4:
				result = botClient.users.array().length;
				break;
			case 5:
				result = Math.round(botClient.ping);
				break;
			case 6:
				result = Math.floor(botClient.uptime / 1000); //Deprecated in 1.8.5
				break;
			case 7:
				result = Math.floor(botClient.uptime / 1000 / 60); //Deprecated in 1.8.5
				break;
			case 8:
				result = botClient.token;
				break;
			case 9:
				result = botClient.voiceConnections.size;
				break;
			case 10:
				result = botClient.channels.size;
				break;
			case 11:
				result = botClient.emojis.size;
				break;
			case 12:
				result = botClient.pings;
				break;
			case 13:
				result = botClient.uptime / msToDay; //Deprecated in 1.8.5
				break;
			case 14:
				result = Math.floor(botClient.uptime / msToDay); //Deprecated in 1.8.5
				break;
			case 15:
				result = ((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2) + "%"; //Deprecated in 1.8.8
				break;
			case 16:
				result = botClient.guilds;
				break;
			case 17:
				result = botClient.guilds.array();
				break;
			case 18:
				result = botClient.guilds.map(guilds => guilds.id);
				break;
			case 19:
				result = dibiem.Files.data.settings.tag;
				break;
			case 20:
				result = dibiem.Files.data.settings.client;
				break;
			case 21:
				result = dibiem.DiscordJS.version;
				break;
			case 22:
				result = Math.floor(botClient.uptime / 1000 / 60 / 60); //Deprecated in 1.8.5
				break;
			case 23:
				result = Math.floor((process.uptime() % 31536000) / 86400);
				break;
			case 24:
				result = Math.floor((process.uptime() % 86400) / 3600);
				break;
			case 25:
				result = Math.floor((process.uptime() % 3600) / 60);
				break;
			case 26:
				result = Math.round(process.uptime() % 60);
				break;
			case 27:
				result = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
				break;
			case 28:
				if (process.platform) {
					const platform = process.platform;
					if (platform === 'win32') result = 'Windows';
					else if (platform === 'aix') result = 'Aix';
					else if (platform === 'linux') result = 'Linux';
					else if (platform === 'darwin') result = 'Darwin';
					else if (platform === 'openbsd') result = 'OpenBSD';
					else if (platform === 'sunos') result = 'Solaris';
					else if (platform === 'freebsd') result = 'FreeBSD';
				}
				break;
			case 29:
				result = (process.cpuUsage().user / 1024 / 1024).toFixed(2);
				break;
			case 30:
				result = process.cwd();
				break;
			case 31:
				result = process.versions.node;
				break;
			case 32:
				result = dibiem.Files.data.commands.length;
				break;
			case 33:
				result = dibiem.Files.data.events.length;
				break;
			case 34:
				result = botClient.readyTimestamp;
				break;
			default:
				break;
		}
		if (result !== undefined) {
			const storage = parseInt(data.storage);
			const varName2 = this.evalMessage(data.varName2, cache);
			this.storeValue(result, storage, varName2, cache);
		}
		this.callNextAction(cache);
	},

	//---------------------------------------------------------------------
	// Action Bot Mod
	//
	// Upon initialization of the bot, this code is run. Using the bot's
	// DBM namespace, one can add/modify existing functions if necessary.
	// In order to reduce conflictions between mods, be sure to alias
	// functions you wish to overwrite.
	//---------------------------------------------------------------------

	mod: function (DBM) { }

}; // End of module
