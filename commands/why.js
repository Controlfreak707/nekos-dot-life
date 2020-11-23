module.exports = {
  command: "why",
  description: "Get text of a question.",
  executor: async (args, nekos) => {
    if (args.length < 1) {
      return {
        send: false,
        result: {
          type: "rich",
          author: { name: "Nekos.Life" },
          title: "Missing required arguments",
          footer: {
            text: `Refer to ${powercord.api.commands.prefix}help neko`,
          },
        },
      };
    }
    const { why } = await nekos.sfw.why({ text: args.join(" ") });
    return {
      send: true,
      result: why,
    };
  },
  autocomplete: (args) => {
    if (args[1] === void 0) {
      return {
        commands: [
          {
            command: "Enter question...",
            wildcard: true,
            instruction: true,
          },
        ],
      };
    }
  },
};
