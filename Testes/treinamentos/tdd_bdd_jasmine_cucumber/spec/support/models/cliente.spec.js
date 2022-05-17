const cliente = require('../../../models/cliente')

describe('cliente', ()=> {
beforeEach(()=>{

})

it('Valida propriedades de um cliente', () => {
    let cliente = cliente.primeiro();
    expect(cliente.id).not.toBeUndefined()
    expect(cliente.nome).not.toBeUndefined()
    expect(cliente.telefone).not.toBeUndefined()
});


it('Retorna todos', () => {
    let cliente = cliente.todos();
    expect(cliente.length).toEqual(10)

});

it('nome do cliente Upercase', () => {
    let cliente = cliente.primeiro();
    cliente.nome = "sophia"
    expect(cliente.nomeUpercase()).toEqual(SOPHIA)

});

})