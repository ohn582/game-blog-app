export default (state = [], action) => {
    // debugger
    switch (action.type) {
        case "SET_GAMES":
            return [...action.payload]
        case "ADD_GAME":
            return [...state, action.payload]
        case "REMOVE_GAME":
            let newGames = state.filter(game => game.id !== action.payload)
            return [...newGames]
        default:
            return state
    }
}