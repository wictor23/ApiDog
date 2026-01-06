describe('Imagem aleatória de cachorro', () => {

    it('Deve retornar uma imagem aleatória válida de cachorro', () => {

        cy.request({
            method: 'GET',
            url: '/breeds/image/random'
        }).then((response) => {


            const body = response.body

            expect(response.status).to.eq(200);
            expect(body).to.have.property('status', 'success');
            expect(body).to.have.property('message');
            expect(body.message).to.be.a('string');
            expect(body.message).to.match(/^https:\/\/images\.dog\.ceo\/breeds\/.+\.jpg$/);
            expect(body.message).to.include('/breeds/');

        })

    })
})
describe('Múltiplas imagens aleatórias', () => {

    it('Deve retornar múltiplas imagens aleatórias de cachorros', () => {

        const quantidadeEsperada = 3

        cy.request({
            method: 'GET',
            url: `/breeds/image/random/${quantidadeEsperada}`
        }).then((response) => {

            const body = response.body

            expect(response.status).to.eq(200)
            expect(body).to.have.property('status')
            expect(body.status).to.be.oneOf(['success', 'sucesso'])
            expect(body).to.have.property('message')
            expect(body.message).to.be.an('array')
            expect(body.message.length).to.eq(quantidadeEsperada)

            body.message.forEach((imageUrl, index) => {

                expect(imageUrl, `Imagem na posição ${index}`)
                    .to.be.a('string')
                    .and.match(/^https:\/\/images\.dog\.ceo\/breeds\/.+\.(jpg|jpeg|png)$/)

            });

        });

    });

});

