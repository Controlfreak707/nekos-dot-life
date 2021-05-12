export const command = "tits";
export const description = "Gets a NSFW URL of tits image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.tits();
  return {
    send: true,
    result: url,
  };
}
