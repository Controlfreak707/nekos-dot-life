export const command = "meow";
export const description = "Gets the URL of a cat image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.meow();
  return {
    send: true,
    result: url,
  };
}
