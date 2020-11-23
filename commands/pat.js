module.exports = {
  command: "pat",
  description: "Gets a URL of a pat image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.pat();
    return {
      send: true,
      result: url,
    };
  },
};
