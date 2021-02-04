module.exports = {
  command: "futanari",
  description: "Gets a NSFW URL of an/a image/gif of futa",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.futanari();
    return {
      send: true,
      result: url,
    };
  },
};
