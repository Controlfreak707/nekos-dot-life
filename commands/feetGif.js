module.exports = {
  command: "feetGif",
  description: "Gets a NSFW URL of feet gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.feetGif();
    return {
      send: true,
      result: url,
    };
  },
};
