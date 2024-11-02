const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Altere para o caminho correto do seu servidor

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de Integração do Servidor', () => {
    it('Deve retornar "Hello World" na rota GET /', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello World');
                done();
            });
    });

    it('Deve retornar JSON com mensagem de sucesso na rota POST /data', (done) => {
        const data = { nome: 'Teste' };
        chai.request(server)
            .post('/data')
            .send(data)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('message').equal('Sucesso');
                expect(res.body).to.have.property('data').eql(data);
                done();
            });
    });
});
