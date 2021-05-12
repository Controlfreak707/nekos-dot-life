export const command = "hentai";
export const description = "Gets a NSFW URL of hentai image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.hentai();
  return {
    send: true,
    result: url,
  };
}
