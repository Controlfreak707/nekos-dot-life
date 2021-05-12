export const command = "nekoGif";
export const description = "Gets the URL of a neko gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.nekoGif();
  return {
    send: true,
    result: url,
  };
}
