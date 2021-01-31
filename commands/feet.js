module.exports = {
  command: "feet",
  description: "Gets the URL of a feet image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.feet();
    return {
      send: true,
      result: url,
    };
  },
};
