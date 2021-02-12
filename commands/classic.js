module.exports = {
  command: "classic",
  description: "Gets a NSFW URL of classic image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.classic();
    return {
      send: true,
      result: url,
    };
  },
};
