module.exports = {
  command: "cuddle",
  description: "Gets a URL of a cuddle image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.cuddle();
    return {
      send: true,
      result: url,
    };
  },
};
