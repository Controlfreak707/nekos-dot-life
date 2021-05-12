export const command = "cumsluts";
export const description = "Gets a NSFW URL of a cumslut image or gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.cumsluts();
  return {
    send: true,
    result: url,
  };
}
