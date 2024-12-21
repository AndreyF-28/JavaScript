const getData = (url) => 
    new Promise((resolve, reject) =>
        fetch (url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

const getData2 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

export {
    getData,
    getData2
}