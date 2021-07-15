let secretObject = {
    
}
export function getTestCredentials() {
    const { clientId, secret } = Cypress.config();	 
    return `${clientId}:${secret}`;	
  }

  let Secret = 'secret'
  let aSecret = 'aSecret'