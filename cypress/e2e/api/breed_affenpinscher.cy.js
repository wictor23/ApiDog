describe('Imagem aleatória da raça affenpinscher', () => {
  it('Deve retornar uma imagem aleatória da raça affenpinscher', () => {
    cy.request('/breed/affenpinscher/images/random').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('success');
      expect(response.body.message).to.be.a('string');
      expect(response.body.message).to.include('/affenpinscher/');
    });
  });
});

describe('Imagem aleatória deve ser diferente em requisições consecutivas', () => {
  it('Deve retornar imagens diferentes em duas consultas seguidas', () => {
    let primeiraImagem;

    cy.request('/breeds/image/random').then((response1) => {
      expect(response1.status).to.eq(200);
      expect(response1.body.status).to.eq('success');
      primeiraImagem = response1.body.message;
    });

    cy.request('/breeds/image/random').then((response2) => {
      expect(response2.status).to.eq(200);
      expect(response2.body.status).to.eq('success');
      expect(response2.body.message).to.not.eq(primeiraImagem);
    });
  });
});
