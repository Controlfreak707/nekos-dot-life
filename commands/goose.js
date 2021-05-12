export const command = "goose";
export const description = "Gets the URL of a goose image.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.goose();
  return {
    send: true,
    result: url,
  };
}
