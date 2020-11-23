module.exports = {
  command: "nekoGif",
  description: "Gets the URL of a neko gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.nekoGif();
    return {
      send: true,
      result: url,
    };
  },
};
