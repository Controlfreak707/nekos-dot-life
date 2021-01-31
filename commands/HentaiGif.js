module.exports = {
  command: "randomHentaiGif",
  description: "Gets the URL of a Hentai image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.randomHentaiGif();
    return {
      send: true,
      result: url,
    };
  },
};
