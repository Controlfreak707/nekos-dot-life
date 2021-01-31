module.exports = {
  command: "keta",
  description: "Gets the URL of a keta image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.keta();
    return {
      send: true,
      result: url,
    };
  },
};
