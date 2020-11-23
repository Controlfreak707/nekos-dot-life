module.exports = {
  command: "hug",
  description: "Gets a URL of a hug image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.hug();
    return {
      send: true,
      result: url,
    };
  },
};
