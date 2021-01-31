module.exports = {
  command: "eroyuri",
  description: "Gets the URL of a eroYuri image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroYuri();
    return {
      send: true,
      result: url,
    };
  },
};
