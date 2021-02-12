module.exports = {
  command: "hentai",
  description: "Gets a NSFW URL of hentai image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.hentai();
    return {
      send: true,
      result: url,
    };
  },
};
