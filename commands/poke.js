export const command = "poke";
export const description = "Gets the URL of a poke image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.poke();
  return {
    send: true,
    result: url,
  };
}
