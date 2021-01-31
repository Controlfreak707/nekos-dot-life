module.exports = {
  command: "pussyArt",
  description: "Gets the URL of a pussyArt image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.pussyArt();
    return {
      send: true,
      result: url,
    };
  },
};
