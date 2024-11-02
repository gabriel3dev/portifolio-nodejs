const assert = require('assert')
const { soma } = require('../math'); 


describe('Testes de Soma do Servidor', () => {
    it('should return 5 when adding 2 and 3', (done) => {
        assert.strictEqual(soma(2, 3), 5);        
        done();
    });

    it('should return -1 when adding -2 and 1', (done) => {
        assert.strictEqual(soma(-2, 1), -1);        
        done();
    });

    it('should return 0 when adding 0 and 0', (done) => {
        assert.strictEqual(soma(0, 0), 0);        
        done();
    });
});
