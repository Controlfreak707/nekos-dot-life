module.exports = {
  command: "feet",
  description: "Gets a NSFW URL of feet image",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.feet();
    return {
      send: true,
      result: url,
    };
  },
};
