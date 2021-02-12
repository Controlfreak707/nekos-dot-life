module.exports = {
  command: "pussyArt",
  description: "Gets a NSFW URL of pussyArt image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.pussyArt();
    return {
      send: true,
      result: url,
    };
  },
};
