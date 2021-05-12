export const command = "pussyArt";
export const description = "Gets a NSFW URL of pussyArt image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.pussyArt();
  return {
    send: true,
    result: url,
  };
}
