module.exports = {
  command: "keta",
  description: "Gets a NSFW URL of keta image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.keta();
    return {
      send: true,
      result: url,
    };
  },
};
