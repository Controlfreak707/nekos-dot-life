module.exports = {
  command: "hug",
  description: "Gets the URL of a hug image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.hug();
    return {
      send: true,
      result: url,
    };
  },
};
