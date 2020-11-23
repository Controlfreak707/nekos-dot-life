module.exports = {
  command: "kiss",
  description: "Gets the URL of a kiss image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.kiss();
    return {
      send: true,
      result: url,
    };
  },
};
