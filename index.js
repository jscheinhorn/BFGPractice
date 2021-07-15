let secretObject = {
    "safe": "safe"
}
export function getTestCredentials() {
    const { clientId } = Cypress.config();	 
    return `${clientId}:`;	
  }

  let Secret = 'secret'
  let anotherSecret = 'anotherSecret'
  let newSecret = "secret"