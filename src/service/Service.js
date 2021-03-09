const basicUrl = 'https://www.omdbapi.com/'

export class Service {

    static getMovies(movie, page) {
        return fetch(`${basicUrl}?s=${movie}&apikey=4a3b711b&page=${page}`, 
        )
    }

    static getTotalRes(movie) {
        return fetch(`${basicUrl}?s=${movie}&apikey=4a3b711b`)
            .then(response => response.json())
                .then(data => {
                    return data.totalResults
                })
    }
}