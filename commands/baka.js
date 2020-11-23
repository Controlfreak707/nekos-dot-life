module.exports = {
  command: "baka",
  description: "Gets the URL of a baka image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.baka();
    return {
      send: true,
      result: url,
    };
  },
};
