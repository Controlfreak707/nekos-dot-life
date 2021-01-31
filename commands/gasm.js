module.exports = {
  command: "gasm",
  description: "Gets the URL of a gasm image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.gasm();
    return {
      send: true,
      result: url,
    };
  },
};
