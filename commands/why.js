module.exports = {
  command: "why",
  description: "Gets a URL of why image/gif",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.why();
    return {
      send: true,
      result: url,
    };
  },
};