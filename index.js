const { Plugin } = require("powercord/entities");

const Settings = require("./Settings.jsx");
const commands = require("./commands");

const NekosClient = require("nekos.life");
const nekos = new NekosClient();

module.exports = class NekosDotLife extends (
  Plugin
) {
  startPlugin() {
    // eslint-disable-next-line no-undef
    powercord.api.settings.registerSettings("nekos-dot-life", {
      category: this.entityID,
      label: "Nekos.Life",
      render: Settings,
    });
    // eslint-disable-next-line no-undef
    powercord.api.commands.registerCommand({
      command: "neko",
      description:
        "Provides a variety of commands provided by the nekos.life API.",
      usage: "{c} <subcommand> [text]",
      executor: (args) => {
        const subcommand = commands[args[0]];
        if (!subcommand)
          return {
            send: false,
            result: {
              type: "rich",
              author: { name: "Nekos.Life" },
              title: "Invalid subcommand",
              description: `\`${
                args[0]
              }\` is not a valid subcommand. Specify one of ${Object.keys(
                commands
              )
                .map((cmd) => `\`${cmd}\``)
                .join(", ")}.`,
            },
          };

        if (!this.settings.get("nsfw", false) && subcommand.nsfw)
          return {
            send: false,
            result: {
              type: "rich",
              author: { name: "Nekos.Life" },
              title: "NSFW commands disabled",
              description: `\`${subcommand.command}\` is marked as potentially NSFW. To use this command, you must enable potentially NSFW commands.`,
            },
          };

        return subcommand.executor(args.slice(1), nekos);
      },
      autocomplete: (args) => {
        if (args[0] !== void 0 && args.length === 1) {
          return {
            commands: Object.values(commands)
              .filter(({ command }) => command.includes(args[0].toLowerCase()))
              .filter(({ nsfw }) =>
                this.settings.get("nsfw", false) ? true : !nsfw
              ),
            header: "neko subcommands",
          };
        }

        const subcommand = commands[args[0]];
        if (!subcommand || !subcommand.autocomplete) {
          return false;
        }

        return subcommand.autocomplete(args.slice(1));
      },
    });
  }

  pluginWillUnload() {
    // eslint-disable-next-line no-undef
    powercord.api.settings.unregisterSettings("nekos-dot-life");
    // eslint-disable-next-line no-undef
    powercord.api.commands.unregisterCommand("neko");
  }
};
