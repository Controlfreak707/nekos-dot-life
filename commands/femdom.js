module.exports = {
  command: "femdom",
  description: "Gets the URL of a femdom image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.femdom();
    return {
      send: true,
      result: url,
    };
  },
};
