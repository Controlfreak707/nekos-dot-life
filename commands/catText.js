module.exports = {
  command: "catText",
  description: "Get text of a cat emoji.",
  executor: async (args, nekos) => {
    if (args.length < 1) {
      return {
        send: false,
        result: {
          type: "rich",
          author: { name: "Nekos.Life" },
          title: "Missing required arguments!",
          footer: {
            // eslint-disable-next-line no-undef
            text: `Refer to ${powercord.api.commands.prefix}help neko`,
          },
        },
      };
    }
    const { cat } = await nekos.sfw.catText({ text: args.join(" ") });
    return {
      send: true,
      result: cat,
    };
  },
  autocomplete: (args) => {
    if (args[1] === void 0) {
      return {
        commands: [
          {
            command: "Enter cat emoji to stringify...",
            wildcard: true,
            instruction: true,
          },
        ],
      };
    }
  },
};
