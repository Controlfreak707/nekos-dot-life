module.exports = {
  command: "owoify",
  description: "Get OwOified text of a string.",
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
    const { owo } = await nekos.sfw.OwOify({ text: args.join(" ") });
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
            command: "Enter text to OwOify...",
            wildcard: true,
            instruction: true,
          },
        ],
      };
    }
  },
};
