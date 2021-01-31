module.exports = {
  command: "bJ",
  description: "Gets the URL of a bJ image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.bJ();
    return {
      send: true,
      result: url,
    };
  },
};
