module.exports = {
  command: "eroKitsune",
  description: "Gets a NSFW URL of eroKitsune image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroKitsune();
    return {
      send: true,
      result: url,
    };
  },
};
