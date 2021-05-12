export const command = "woof";
export const description = "Gets the URL of a dog image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.woof();
  return {
    send: true,
    result: url,
  };
}
