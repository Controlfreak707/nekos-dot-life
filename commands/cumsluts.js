module.exports = {
  command: "cumSluts",
  description: "Gets the URL of a cumsluts image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.cumsluts();
    return {
      send: true,
      result: url,
    };
  },
};
