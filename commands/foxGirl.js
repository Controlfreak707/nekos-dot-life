module.exports = {
  command: "foxGirl",
  description: "Gets a URL of a fox girl image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.foxGirl();
    return {
      send: true,
      result: url,
    };
  },
};
