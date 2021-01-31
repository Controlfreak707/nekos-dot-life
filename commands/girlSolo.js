module.exports = {
  command: "girlsolo",
  description: "Gets the URL of a girlSolo image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.girlSolo();
    return {
      send: true,
      result: url,
    };
  },
};
