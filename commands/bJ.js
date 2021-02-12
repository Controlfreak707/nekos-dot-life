module.exports = {
  command: "anal",
  description: "Gets a NSFW URL of anal image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.anal();
    return {
      send: true,
      result: url,
    };
  },
};
