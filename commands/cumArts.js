module.exports = {
  command: "cumArts",
  description: "Gets a NSFW URL of cumArts image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.cumArts();
    return {
      send: true,
      result: url,
    };
  },
};
