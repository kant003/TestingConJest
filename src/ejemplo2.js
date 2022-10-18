// función a la que se le pase un array.
// esta devolverá el primer y último elemento del array(concatenado)
// y en mayúscula
// Si tiene menos de 2 elementos el array, lanzamos excepción
// ['angel', 'pepe', 'bea']  =>  "ANGELBEA"
// Crea los test correspondientes

export function firstLast(values){
    if(values.length < 2) throw new Error('minimo 2 elementos')
    return values[0].toUpperCase() + values[values.length-1].toUpperCase()
}