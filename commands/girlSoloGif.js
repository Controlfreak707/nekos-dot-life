export const command = "soloGirlGif";
export const description = "Gets a NSFW URL of solo girl gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.girlSoloGif();
  return {
    send: true,
    result: url,
  };
}
