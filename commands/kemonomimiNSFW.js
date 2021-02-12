module.exports = {
  command: "kemonomimiNSFW",
  description: "Gets a NSFW URL of kemonomimi image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.kemonomimi();
    return {
      send: true,
      result: url,
    };
  },
};
