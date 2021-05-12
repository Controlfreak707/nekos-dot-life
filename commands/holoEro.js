export const command = "holoEro";
export const description = "Gets a NSFW URL of holoEro image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.holoEro();
  return {
    send: true,
    result: url,
  };
}
