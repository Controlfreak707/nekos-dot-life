module.exports = {
  command: "tits",
  description: "Gets a NSFW URL of tits image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.tits();
    return {
      send: true,
      result: url,
    };
  },
};
