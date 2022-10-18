export function add(num1, num2){
    return num1+num2
}

export function sub(num1, num2){
    if(num1===undefined || num2===undefined) throw new Error('valores incorrectos')
    return num1-num2
}