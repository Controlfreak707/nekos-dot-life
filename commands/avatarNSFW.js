module.exports = {
  command: "avatarNSFW",
  description: "Gets the URL of a NSFW avatar.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.avatar();
    return {
      send: true,
      result: url,
    };
  },
};
