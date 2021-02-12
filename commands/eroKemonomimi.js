module.exports = {
  command: "eroKemonomimi",
  description: "Gets a NSFW URL of eroKemonomimi image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroKemonomimi();
    return {
      send: true,
      result: url,
    };
  },
};
