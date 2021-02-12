module.exports = {
  command: "kuni",
  description: "Gets a NSFW URL of kuni image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.kuni();
    return {
      send: true,
      result: url,
    };
  },
};
