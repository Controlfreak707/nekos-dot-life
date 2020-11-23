module.exports = {
  command: "wallpaper",
  description: "Gets the URL of a wallpaper.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.wallpaper();
    return {
      send: true,
      result: url,
    };
  },
};
