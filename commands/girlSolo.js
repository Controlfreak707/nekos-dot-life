export const command = "soloGirl";
export const description = "Gets a NSFW URL of solo girl image.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.girlSolo();
  return {
    send: true,
    result: url,
  };
}
