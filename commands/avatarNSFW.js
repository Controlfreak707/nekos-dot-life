export const command = "avatarNSFW";
export const description = "Gets the URL of a NSFW avatar.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.avatar();
  return {
    send: true,
    result: url,
  };
}
