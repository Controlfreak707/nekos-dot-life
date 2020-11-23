module.exports = {
  command: "waifu",
  description: "Gets the URL of a waifu image.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.waifu();
    return {
      send: true,
      result: url,
    };
  },
};
