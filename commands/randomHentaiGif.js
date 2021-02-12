module.exports = {
  command: "hentaiGif",
  description: "Gets a NSFW URL of a Hentai gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.randomHentaiGif();
    return {
      send: true,
      result: url,
    };
  },
};
