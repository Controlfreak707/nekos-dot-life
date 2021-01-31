module.exports = {
  command: "ero",
  description: "Gets the URL of a ero image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.ero();
    return {
      send: true,
      result: url,
    };
  },
};
