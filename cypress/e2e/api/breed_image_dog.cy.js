describe('Imagens por raça', () => {

    it('Deve retornar todas as imagens da por raça', () => {

        const breed = 'hound';
        
        cy.request({
            method: 'GET',
            url: `/breed/${breed}/images`
        }).then((response) => {

            const body = response.body

            expect(response.status).to.eq(200)
            expect(body).to.have.property('status')
            expect(body.status).to.be.oneOf(['success', 'sucesso'])
            expect(body).to.have.property('message')
            expect(body.message).to.be.an('array')
            expect(body.message.length).to.be.greaterThan(0)

            body.message.forEach((imageUrl, index) => {

                expect(imageUrl, `Imagem ${index}`)
                    .to.be.a('string')
                    .and.match(/^https:\/\/images\.dog\.ceo\/breeds\/hound-.+\.(jpg|jpeg|png)$/)

            });

        });

    });

});

describe('Imagem aleatória por raça ', () => {

  it('Deve retornar uma imagem aleatória por raça', () => {

    cy.request({
      method: 'GET',
      url: '/breed/hound/images/random'
    }).then((response) => {

      const body = response.body

      expect(response.status).to.eq(200)
      expect(body).to.have.property('status', 'success')
      expect(body).to.have.property('message')

      expect(body.message).to.be.a('string')
      expect(body.message).to.match(
        /^https:\/\/images\.dog\.ceo\/breeds\/hound-.+\.(jpg|jpeg|png)$/
      )
      expect(body.message).to.include('/breeds/hound-')

    })

  })

})

describe('Múltiplas imagens por raça (hound)', () => {

  it('Deve retornar múltiplas imagens aleatórias da raça', () => {

    const quantidadeEsperada = 3

    cy.request({
      method: 'GET',
      url: `/breed/hound/images/random/${quantidadeEsperada}`
    }).then((response) => {

      expect(response.status).to.eq(200)

      const body = response.body

      expect(body).to.have.property('status', 'success')
      expect(body).to.have.property('message')
      expect(body.message).to.be.an('array')
      expect(body.message.length).to.eq(quantidadeEsperada)

      body.message.forEach((imageUrl, index) => {

        expect(imageUrl, `Imagem ${index}`)
          .to.be.a('string')
          .and.match(
            /^https:\/\/images\.dog\.ceo\/breeds\/hound-.+\.(jpg|jpeg|png)$/
          )

      });

    });

  });

});
