module.exports = {
  command: "trap",
  description: "Gets a NSFW URL of trap image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.trap();
    return {
      send: true,
      result: url,
    };
  },
};
