module.exports = {
  command: "cumsluts",
  description: "Gets a NSFW URL of cumsluts image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.cumsluts();
    return {
      send: true,
      result: url,
    };
  },
};
