
const array = process.argv
array2 = array.slice(2)
array2.sort((a,b)=>{
    return Number(b)-Number(a)
})
    elm = array2[2]  //配列から3番目の要素を取得
    console.log(elm)




