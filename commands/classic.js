module.exports = {
  command: "classic",
  description: "Gets the URL of a classic image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.classic();
    return {
      send: true,
      result: url,
    };
  },
};
