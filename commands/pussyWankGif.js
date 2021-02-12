module.exports = {
  command: "pussyWankGif",
  description: "Gets a NSFW URL of pussy wank gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.pussyWankGif();
    return {
      send: true,
      result: url,
    };
  },
};
