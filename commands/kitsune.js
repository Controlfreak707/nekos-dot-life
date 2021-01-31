module.exports = {
  command: "kitsune",
  description: "Gets the URL of a kitsune image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.kitsune();
    return {
      send: true,
      result: url,
    };
  },
};
