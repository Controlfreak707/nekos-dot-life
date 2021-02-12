module.exports = {
  command: "spank",
  description: "Gets a NSFW URL of spank image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.spank();
    return {
      send: true,
      result: url,
    };
  },
};
