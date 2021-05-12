export const command = "hentaiGif";
export const description = "Gets a NSFW URL of a Hentai gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.randomHentaiGif();
  return {
    send: true,
    result: url,
  };
}
