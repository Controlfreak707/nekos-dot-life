export const command = "eroKitsune";
export const description = "Gets a NSFW URL of eroKitsune image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.eroKitsune();
  return {
    send: true,
    result: url,
  };
}
