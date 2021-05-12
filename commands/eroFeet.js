export const command = "eroFeet";
export const description = "Gets a NSFW URL of eroFeet image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.eroFeet();
  return {
    send: true,
    result: url,
  };
}
