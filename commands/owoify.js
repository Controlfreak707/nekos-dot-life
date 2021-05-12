export const command = "owoify";
export const description = "Get OwOified text of a string.";
export async function executor(args, nekos) {
  if (args.length < 1) {
    return {
      send: false,
      result: {
        type: "rich",
        author: { name: "Nekos.Life" },
        title: "Missing required arguments",
        footer: {
        text: `Refer to ${powercord.api.commands.prefix}help neko`,
        },
      },
    };
  }
  const { owo } = await nekos.sfw.OwOify({ text: args.join(" ") });
  return {
    send: true,
    result: owo,
  };
}
export function autocomplete(args) {
  if (args[1] === void 0) {
    return {
      commands: [
        {
          command: "Enter text to OwOify...",
          wildcard: true,
          instruction: true,
        },
      ],
    };
  }
}
