module.exports = {
  command: "nekoGif",
  description: "Gets a URL of a neko gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.nekoGif();
    return {
      send: true,
      result: url,
    };
  },
};
