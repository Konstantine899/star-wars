export function extractId(body: any) {
  //Регулярка для поиска id в строке url
  const idReg = /\/([0-9]*)\/$/;
  return body.url.match(idReg)[1]; // return "number"
}
