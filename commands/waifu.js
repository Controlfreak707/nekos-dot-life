export const command = "waifu";
export const description = "Gets the URL of a waifu image.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.waifu();
  return {
    send: true,
    result: url,
  };
}
