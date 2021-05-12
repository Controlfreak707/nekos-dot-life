export const command = "kemonomimi";
export const description = "Gets the URL of a kemonomimi image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.kemonomimi();
  return {
    send: true,
    result: url,
  };
}
