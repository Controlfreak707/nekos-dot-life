module.exports = {
  command: "tits",
  description: "Gets the URL of a tits image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.tits();
    return {
      send: true,
      result: url,
    };
  },
};
