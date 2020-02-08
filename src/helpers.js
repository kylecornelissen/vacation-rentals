export const fetchAreaDetails = (areaData) => {
  let promises = areaData.map(area => {
  	return fetch(`http://localhost:3001${area.details}`)
  	.then(res => res.json())
  	.then(areaDetails => {
  		return {
  			shortName: area.area,
  			name: areaDetails.name,
  			id: areaDetails.id,
  			about: areaDetails.about,
  			listings: areaDetails.listings
  		}
  	})
  	.catch(error => console.log(error))
  })
  return Promise.all(promises)
}
