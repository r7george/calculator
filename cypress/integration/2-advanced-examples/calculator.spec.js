it("should check that 7+2 equals 9", () => {
  cy.visit("http://127.0.0.1:5500/")
  // dbl click means there's bugs in the calculator ._.
  cy.get("#seven").dblclick()
  cy.get("#plus").dblclick()
  cy.get("#two").click()
  cy.get("#equals").dblclick()  
  
  cy.get("#output").should("contain", "9.00000")
})

it("should check that 7-2 equals 5", () => {
  cy.visit("http://127.0.0.1:5500/")
  // dbl click means there's bugs in the calculator ._.
  cy.get("#seven").dblclick()
  cy.get("#minus").dblclick()
  cy.get("#two").click()
  cy.get("#equals").dblclick()  
  
  cy.get("#output").should("contain", "5.00000")
})

it("should check that 7*2 equals 14", () => {
  cy.visit("http://127.0.0.1:5500/")
  // dbl click means there's bugs in the calculator ._.
  cy.get("#seven").dblclick()
  cy.get("#times").dblclick()
  cy.get("#two").click()
  cy.get("#equals").dblclick()  
  
  cy.get("#output").should("contain", "14.0000")
})

it("should check that 7/2 equals 3.5", () => {
  cy.visit("http://127.0.0.1:5500/")
  // dbl click means there's bugs in the calculator ._.
  cy.get("#seven").dblclick()
  cy.get("#divide").dblclick()
  cy.get("#two").click()
  cy.get("#equals").dblclick()  
  
  cy.get("#output").should("contain", "3.50000")
})

it("should check that -7+2 equals -5 (using +/-)", () => {
  cy.visit("http://127.0.0.1:5500/")
  cy.get("#seven").dblclick()
  cy.get("#plusMinus").dblclick()
  cy.get("#plus").dblclick()
  cy.get("#two").click()
  cy.get("#equals").dblclick()

  cy.get("#output").should("contain", "-5.00000")
})

it("should check that the operation is clear by AC", () => {
  cy.visit("http://127.0.0.1:5500/")
  // dbl click means there's bugs in the calculator ._.
  cy.get("#seven").dblclick()
  cy.get("#divide").dblclick()
  cy.get("#two").click()
  cy.get("#equals").dblclick()  
  
  cy.get("#ac").click()
  cy.get("#ac").click()

  cy.get("#operations").should("not.contain", "7/2")
})

it("should check that the whole console has been cleared by doubleclicking AC", () => {
  cy.visit("http://127.0.0.1:5500/")
  // dbl click means there's bugs in the calculator ._.
  cy.get("#seven").dblclick()
  cy.get("#divide").dblclick()
  cy.get("#two").click()
  cy.get("#equals").dblclick()  
  
  cy.get("#ac").click()
  cy.get("#ac").click()
  cy.get("#ac").dblclick()

  cy.get("#operations").should("not.contain", "7/2")
  cy.get("#output").should("not.contain", "3.50000")
})