module.exports = {
  command: "lizard",
  description: "Gets a URL of a lizard image.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.lizard();
    return {
      send: true,
      result: url,
    };
  },
};
