export const mapper = array => {
    return array.map(({ id, webformatURL, largeImageURL, tags }) => ({ id, webformatURL, largeImageURL, tags }))
}
