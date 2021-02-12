module.exports = {
  command: "cuddle",
  description: "Gets the URL of a cuddle image or gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.cuddle();
    return {
      send: true,
      result: url,
    };
  },
};
