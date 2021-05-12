export const command = "feetGif";
export const description = "Gets a NSFW URL of feet gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.feetGif();
  return {
    send: true,
    result: url,
  };
}
