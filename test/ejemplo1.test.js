import {add, sub} from '../src/ejemplo1'


describe('Test del ejemplo 1 suma', ()=>{
    it('sumar dos enteros', ()=>{
        const result = add(2,3)
        expect(result).toBe(5)
    })
})

describe('Test del ejemplo 1 resta', ()=>{
    it('restar dos enteros', ()=>{
        const result = sub(3,2)
        expect(result).toBe(1)
    })
    it('restar 2 ceros', ()=>{
        const result = sub(0,0)
        expect(result).toBe(0)
    })
   /*  it('restar 2 frases', ()=>{
        const result = sub("hola","adios")
        expect(result).toBe(0)
    }) */
    it('restar 2 nulos', ()=>{
        expect( () =>  sub()  ).toThrow()
    })
})

