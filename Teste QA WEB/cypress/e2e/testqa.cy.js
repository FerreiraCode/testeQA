
describe('Teste QA', () => {
  it('Deve ser possivel realizar cadastro', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/users/new');

    cy.get('[id="user_name"]').type('Thiago');
    cy.get('[id="user_lastname"]').type('Ferreira');
    cy.get('[id="user_email"]').type('thiagofsaf@gmail.com');
    cy.get('[id="user_address"]').type('Brasilia');
    cy.get('[id="user_university"]').type('UNB');
    cy.get('[id="user_profile"]').type('QA');
    cy.get('[id="user_gender"]').type('Masculino');
    cy.get('[id="user_age"]').type('21');

    cy.get('[class="actions btn waves-effect green"]').click()
    cy.contains('Usuário Criado com sucesso').should('exist')
  })
})