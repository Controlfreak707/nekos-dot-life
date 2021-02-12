module.exports = {
  command: "holoNSFW",
  description: "Gets a NSFW URL of holo image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.holo();
    return {
      send: true,
      result: url,
    };
  },
};
