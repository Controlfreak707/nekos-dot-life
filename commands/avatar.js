module.exports = {
  command: "avatar",
  description: "Gets the URL of an avatar image.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.avatar();
    return {
      send: true,
      result: url,
    };
  },
};
