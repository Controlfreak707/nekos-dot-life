module.exports = {
  command: "bJ",
  description: "Gets a NSFW URL of a bJ image or gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.bJ();
    return {
      send: true,
      result: url,
    };
  },
};
