module.exports = {
  command: "soloGirl",
  description: "Gets a NSFW URL of solo girl image.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.girlSolo();
    return {
      send: true,
      result: url,
    };
  },
};
