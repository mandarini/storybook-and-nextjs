describe('nexlib: Nexlib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nexlib--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Nexlib!');
    });
});
