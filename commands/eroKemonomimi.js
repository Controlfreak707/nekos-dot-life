module.exports = {
  command: "erokemonomimi",
  description: "Gets the URL of a eroKemonomimi image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroKemonomimi();
    return {
      send: true,
      result: url,
    };
  },
};
