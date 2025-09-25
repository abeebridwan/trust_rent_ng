export function nextLinkbyRole(role: string){
  let finalRedirect = '/'
  switch (role) {
    case 'landlord':
      finalRedirect = '/landlord/dashboard'
      break
    case 'tenant':
      finalRedirect = '/properties?search=all'
      break
    default:
      finalRedirect = '/properties?search=all'
  }

  return finalRedirect
}