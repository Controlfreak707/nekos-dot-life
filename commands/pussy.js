module.exports = {
  command: "pussy",
  description: "Gets the URL of a pussy image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.pussy();
    return {
      send: true,
      result: url,
    };
  },
};
