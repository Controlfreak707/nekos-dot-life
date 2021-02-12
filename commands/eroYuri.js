module.exports = {
  command: "eroYuri",
  description: "Gets a NSFW URL of eroYuri image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroYuri();
    return {
      send: true,
      result: url,
    };
  },
};
