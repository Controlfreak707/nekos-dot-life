module.exports = {
  command: "hentai",
  description: "Gets the URL of a hentai image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.hentai();
    return {
      send: true,
      result: url,
    };
  },
};
