module.exports = {
  command: "pussy",
  description: "Gets a NSFW URL of pussy image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.pussy();
    return {
      send: true,
      result: url,
    };
  },
};
