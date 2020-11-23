module.exports = {
  command: "goose",
  description: "Gets the URL of a goose image.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.goose();
    return {
      send: true,
      result: url,
    };
  },
};
