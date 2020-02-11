export const getAreas = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => {
      if (!response.ok) {
        throw Error("Error! No 200 Status Code Found.")
      }
      return response.json()
    })
}
