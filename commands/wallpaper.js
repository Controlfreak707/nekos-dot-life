module.exports = {
  command: "wallpaper",
  description: "Gets the URL of a wallpaper.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.wallpaper();
    return {
      send: true,
      result: url,
    };
  },
};
