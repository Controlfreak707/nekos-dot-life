export const command = "pussyWankGif";
export const description = "Gets a NSFW URL of pussy wank gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.pussyWankGif();
  return {
    send: true,
    result: url,
  };
}
