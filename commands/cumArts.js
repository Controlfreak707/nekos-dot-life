module.exports = {
  command: "cumArts",
  description: "Gets the URL of a cumArts image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.cumArts();
    return {
      send: true,
      result: url,
    };
  },
};
