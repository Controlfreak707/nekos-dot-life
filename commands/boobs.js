module.exports = {
  command: "boobs",
  description: "Gets a NSFW URL of boobs image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.boobs();
    return {
      send: true,
      result: url,
    };
  },
};
