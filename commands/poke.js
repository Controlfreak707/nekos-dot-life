module.exports = {
  command: "poke",
  description: "Gets the URL of a poke image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.poke();
    return {
      send: true,
      result: url,
    };
  },
};
