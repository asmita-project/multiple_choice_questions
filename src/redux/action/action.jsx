export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';


export const addData = (data) => ({
  type: ADD_DATA,
  payload: data,
});



export const editData = (Id, newData) => ({
    type: EDIT_DATA,
    payload: { Id, newData }
  });