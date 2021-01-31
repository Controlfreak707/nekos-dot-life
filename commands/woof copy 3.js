module.exports = {
  command: "woof",
  description: "Gets the URL of a dog image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.woof();
    return {
      send: true,
      result: url,
    };
  },
};
