module.exports = {
  command: "anal",
  description: "Gets the URL of a anal image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.anal();
    return {
      send: true,
      result: url,
    };
  },
};
