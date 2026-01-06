describe('Validação completa de todas as raças', () => {

  it('Deve validar todas as raças e sub-raças do body', () => {

    cy.request('GET', '/breeds/list/all')
      .then((response) => {

        expect(response.status).to.eq(200)

        const body = response.body

        expect(body).to.have.property('status')
        expect(body.status).to.be.oneOf(['success', 'sucesso'])
        expect(body).to.have.property('message')
        expect(body.message).to.be.an('object')

        const racas = body.message
        for (const raca in racas) {

          expect(raca, 'Nome da raça')
            .to.be.a('string')
            .and.not.be.empty

          const subRacas = racas[raca]

          expect(subRacas, `Sub-raças da raça ${raca}`)
            .to.be.an('array')

          for (let i = 0; i < subRacas.length; i++) {
            expect(subRacas[i], `Sub-raça da raça ${raca}`)
              .to.be.a('string')
              .and.not.be.empty
          }
        }

      })
  })

})
