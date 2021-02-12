module.exports = {
  command: "lesbian",
  description: "Gets a NSFW URL of lesbian image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.lesbian();
    return {
      send: true,
      result: url,
    };
  },
};
