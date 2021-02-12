module.exports = {
  command: "yuri",
  description: "Gets a NSFW URL of yuri image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.yuri();
    return {
      send: true,
      result: url,
    };
  },
};
