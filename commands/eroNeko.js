module.exports = {
  command: "eroNeko",
  description: "Gets a NSFW URL of eroNeko image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroNeko();
    return {
      send: true,
      result: url,
    };
  },
};
