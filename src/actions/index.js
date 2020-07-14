export const addNewTodo = game => {
    return (dispatch) => {
        // debugger
        return fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ game })
        })
            .then(res => res.json())
            .then(game => {
                dispatch({ type: "ADD_GAME", payload: game })
            })
    }
}

export const removeGame = gameId => {
    return (dispatch) => {
        // debugger
        return fetch(`http://localhost:3000/games/${gameId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(game => {
                // debugger
                dispatch({ type: "REMOVE_GAME", payload: game.id })
            })
    }
}

export const fetchGames = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/games')
            .then(res => res.json())
            .then(games => {
                dispatch({ type: 'SET_GAMES', payload: games })
            })
    }
}


















export const addNewReview = review => {
    return (dispatch) => {
        // debugger
        return fetch("http://localhost:3000/reviews", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review })
        })
            .then(res => res.json())
            .then(review => {
                dispatch({ type: "ADD_REVIEW", payload: review })
            })
    }
}


export const removeReview = reviewId => {
    return (dispatch) => {
        // debugger
        return fetch(`http://localhost:3000/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(review => {
                // debugger
                dispatch({ type: "REMOVE_REVIEW", payload: review.id })
            })
    }
}

export const fetchReviews = () => {
    // debugger
    return (dispatch) => {
        return fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(reviews => {
                dispatch({ type: 'SET_REVIEWS', payload: reviews })
            })
    }
}


