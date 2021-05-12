export const command = "cumArts";
export const description = "Gets a NSFW URL of a cum art image or gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.cumArts();
  return {
    send: true,
    result: url,
  };
}
