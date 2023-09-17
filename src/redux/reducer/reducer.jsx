import { ADD_DATA,EDIT_DATA } from "../action/action";

const initialState = {
    FormData: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                FormData: [...state.FormData, action.payload],
            };
        case EDIT_DATA:
            const { Id, newData } = action.payload;
            const updateForm = state.FormData.map((item,index) => {
                if (index === Id) {
                    return { ...item, ...newData };
                }
                return item;
            });
            return {
                ...state,
                FormData: updateForm,
            };
        
        default:
            return state;
    }
};

export default UserReducer;