export const command = "pat";
export const description = "Gets the URL of a pat image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.pat();
  return {
    send: true,
    result: url,
  };
}
