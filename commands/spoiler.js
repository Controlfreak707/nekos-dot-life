export const command = "spoiler";
export const description = "Spoil each individual letter of text.";
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
  const { owo } = await nekos.sfw.spoiler({ text: args.join(" ") });
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
          command: "Enter text to spoil...",
          wildcard: true,
          instruction: true,
        },
      ],
    };
  }
}
