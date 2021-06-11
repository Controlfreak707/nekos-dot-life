const https=require('https')
export function NDL(term){
    https.get(`https://nekos.life/api/v2/img/${term}`),
}