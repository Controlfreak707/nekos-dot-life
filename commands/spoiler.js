module.exports = {
  command: "spoiler",
  description: "Spoil each individual letter of text.",
  executor: async (args, nekos) => {
    if (args.length < 1) {
      return {
        send: false,
        result: {
          type: "rich",
          author: { name: "Nekos.Life" },
          title: "Missing required arguments",
          footer: {
            // eslint-disable-next-line no-undef
            text: `Refer to ${powercord.api.commands.prefix}help neko`,
          },
        },
      };
    }
    const { owo } = await nekos.sfw.spoiler({ text: args.join(" ") });
    return {
      send: true,
      result: owo,
    };
  },
  autocomplete: (args) => {
    if (args[1] === void 0) {
      return {
        commands: [
          {
            command: "Enter text to spoil...",
            wildcard: true,
            instruction: true,
          },
        ],
      };
    }
  },
};
