module.exports = {
  command: "boobs",
  description: "Gets the URL of a boobs image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.boobs();
    return {
      send: true,
      result: url,
    };
  },
};
