export const command = "baka";
export const description = "Gets the URL of a baka image or gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.baka();
  return {
    send: true,
    result: url,
  };
}
