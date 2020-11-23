module.exports = {
  command: "tickle",
  description: "Gets the URL of a tickle image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.tickle();
    return {
      send: true,
      result: url,
    };
  },
};
