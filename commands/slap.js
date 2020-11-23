module.exports = {
  command: "slap",
  description: "Gets the URL of a slap image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.slap();
    return {
      send: true,
      result: url,
    };
  },
};
