module.exports = {
  command: "kiss",
  description: "Gets a URL of a kiss image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.kiss();
    return {
      send: true,
      result: url,
    };
  },
};
