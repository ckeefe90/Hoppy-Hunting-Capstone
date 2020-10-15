import React from 'react'

const BreweryContext = React.createContext({
    breweries: [],
    addBrewery: () => { },
    deleteBrewery: () => { },
})

export default BreweryContext