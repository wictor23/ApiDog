describe('Imagens da sub-raça hound-afghan', () => {

  it('Deve retornar todas as imagens da sub-raça hound-afghan', () => {

    cy.request({
      method: 'GET',
      url: 'https://dog.ceo/api/breed/hound/afghan/images'
    }).then((response) => {

      expect(response.status).to.eq(200)

      const body = response.body
      expect(body).to.have.property('status', 'success')
      expect(body).to.have.property('message')

      expect(body.message).to.be.an('array')
      expect(body.message.length).to.be.greaterThan(0)
      body.message.forEach((imageUrl, index) => {

        expect(imageUrl, `Imagem ${index}`)
          .to.be.a('string')
          .and.match(
            /^https:\/\/images\.dog\.ceo\/breeds\/hound-afghan\/.+\.(jpg|jpeg|png)$/
          )

      });

    });

  });

});

describe('Imagem aleatória de um unico dog', () => {
  it('Deve retornar uma imagem aleatória dde um unico dog', () => {
    cy.request('https://dog.ceo/api/breed/hound/afghan/images/random').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('success');
      expect(response.body.message).to.be.a('string');
      expect(response.body.message).to.include('/hound-afghan/');
    });
  });
});


describe('Imagens aleatórias da sub-raça hound-afghan', () => {
  it('Deve retornar múltiplas imagens aleatórias da sub-raça hound-afghan', () => {
    cy.request('https://dog.ceo/api/breed/hound/afghan/images/random/3').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('success');
      expect(response.body.message).to.be.an('array');
      expect(response.body.message.length).to.eq(3);
    });
  });
});


