module.exports = {
  command: "ero",
  description: "Gets a NSFW URL of ero image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.ero();
    return {
      send: true,
      result: url,
    };
  },
};
