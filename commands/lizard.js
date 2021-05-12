export const command = "lizard";
export const description = "Gets the URL of a lizard image.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.lizard();
  return {
    send: true,
    result: url,
  };
}
