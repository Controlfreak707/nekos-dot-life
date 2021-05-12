export const command = "avatar";
export const description = "Gets the URL of an avatar.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.avatar();
  return {
    send: true,
    result: url,
  };
}
