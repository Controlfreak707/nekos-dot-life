module.exports = {
  command: "nekoGif",
  description: "Gets the URL of a neko gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.nekoGif();
    return {
      send: true,
      result: url,
    };
  },
};
