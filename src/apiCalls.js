export const getAreas = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => {
      if (!response.ok) {
        throw Error("Error! No 200 Status Code Found.")
      }
      return response.json()
    })
}

export const getListing = (listing) => {
  return fetch('http://localhost:3001' + listing)
    .then(response => {
      if (!response.ok) {
        throw Error("Error! No 200 Status Code Found.")
      }
      return response.json()
    })
}
