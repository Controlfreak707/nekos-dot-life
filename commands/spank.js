module.exports = {
  command: "spank",
  description: "Gets the URL of a spank image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.spank();
    return {
      send: true,
      result: url,
    };
  },
};
