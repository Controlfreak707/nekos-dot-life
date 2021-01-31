module.exports = {
  command: "trap",
  description: "Gets the URL of a trap image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.trap();
    return {
      send: true,
      result: url,
    };
  },
};
