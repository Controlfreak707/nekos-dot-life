module.exports = {
  command: "futanari",
  description: "Gets the URL of a futanari image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.futanari();
    return {
      send: true,
      result: url,
    };
  },
};
