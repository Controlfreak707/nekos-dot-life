module.exports = {
  command: "holo",
  description: "Gets the URL of a holo image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.holo();
    return {
      send: true,
      result: url,
    };
  },
};
