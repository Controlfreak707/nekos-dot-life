module.exports = {
  command: "kitsune",
  description: "Gets a NSFW URL of kitsune image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.kitsune();
    return {
      send: true,
      result: url,
    };
  },
};
