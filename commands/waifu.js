module.exports = {
  command: "waifu",
  description: "Gets a URL of a waifu image.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.waifu();
    return {
      send: true,
      result: url,
    };
  },
};
