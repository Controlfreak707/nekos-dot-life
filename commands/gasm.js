export const command = "gasm";
export const description = "Gets a NSFW URL of gasm image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.gasm();
  return {
    send: true,
    result: url,
  };
}
