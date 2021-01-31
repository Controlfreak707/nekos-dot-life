module.exports = {
  command: "lesbian",
  description: "Gets the URL of a lesbian image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.lesbian();
    return {
      send: true,
      result: url,
    };
  },
};
