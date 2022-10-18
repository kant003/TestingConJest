import { firstLast } from "../src/ejemplo2"

describe('Test ejemplo 2', ()=> {

    it('extraer de un array de 3 elementos', ()=>{
       const frase = firstLast(['Angel','Pepe','Bea']) 
       expect(frase).toBe('ANGELBEA')
    })
    it('extraer de un array de 2 elementos', ()=>{
        const frase = firstLast(['Angel','Pepe']) 
        expect(frase).toBe('ANGELPEPE')
     })
    it('extraer de un array de 1 elemento', () =>{
        expect( () => firstLast(['Angel'])  ).toThrow()
    })
})