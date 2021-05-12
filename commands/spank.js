export const command = "spank";
export const description = "Gets a NSFW URL of spank image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.spank();
  return {
    send: true,
    result: url,
  };
}
