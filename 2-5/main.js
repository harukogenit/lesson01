const yen = Number(process.argv[2])
const hundred = Math.floor(yen /100)
const amarihun = yen%100
const ten = Math.floor(amarihun/10)
const amariten = yen%10
console.log(`100円玉${hundred}枚、10円玉${ten}枚、1円玉${amariten}枚`)
