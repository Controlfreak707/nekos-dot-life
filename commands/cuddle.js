export const command = "cuddle";
export const description = "Gets the URL of a cuddle image or gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.cuddle();
  return {
    send: true,
    result: url,
  };
}
