export const initialState = {
    mode: "light",
    langage: "fr",
}


const reducer = (state,action) => {
    const { type, payload } = action;
    switch(type){
        case "LANGAGE":
            return {
                ...state,
                langage: payload.langage
            };
            break;     
        case "MODE":
            return {
                ...state,
                mode: payload.mode
            }
        default:
            return state;
    }

};



export default reducer;