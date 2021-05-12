export const command = "futanari";
export const description = "Gets a NSFW URL of an/a image/gif of futa";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.futanari();
  return {
    send: true,
    result: url,
  };
}
