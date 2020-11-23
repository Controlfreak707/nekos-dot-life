module.exports = {
  command: "meow",
  description: "Gets the URL of a cat image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.meow();
    return {
      send: true,
      result: url,
    };
  },
};
