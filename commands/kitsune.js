export const command = "kitsune";
export const description = "Gets a NSFW URL of kitsune image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.kitsune();
  return {
    send: true,
    result: url,
  };
}
