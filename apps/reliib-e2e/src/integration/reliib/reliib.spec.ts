describe('reliib: Reliib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reliib--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Reliib!');
    });
});
