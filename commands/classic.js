module.exports = {
  command: "classic",
  description: "Gets a NSFW URL of a classic image or gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.classic();
    return {
      send: true,
      result: url,
    };
  },
};
