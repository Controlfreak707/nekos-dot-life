module.exports = {
  command: "smug",
  description: "Gets the URL of a smug image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.smug();
    return {
      send: true,
      result: url,
    };
  },
};
