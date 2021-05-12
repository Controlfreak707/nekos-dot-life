export const command = "hug";
export const description = "Gets the URL of a hug image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.hug();
  return {
    send: true,
    result: url,
  };
}
