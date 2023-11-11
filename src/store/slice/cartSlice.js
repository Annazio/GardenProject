import { createSlice } from "@reduxjs/toolkit";


const read = () => JSON.parse(localStorage.getItem('cart'));
const write = (state) => localStorage.setItem('cart', JSON.stringify(state.list));

const initialState = {list: read() ?? []}
 

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, {payload}){
            const target = state.list.find(({id}) => id === payload);
            if (target){
                target.count++
            }else{
                state.list.push({id: payload, count: 1})
            }
            write(state)
        },
        incrAmount(state, {payload}) {
            const target = state.list.find(({id}) => id === payload);
            target.count++;
            write(state)
        },
        decrAmount(state, {payload}){
            const target = state.list.find(({id}) => id === payload);
            if(target.count === 1){
             state.list = state.list.filter(({id}) => id !== payload)
            }else{
                target.count--
            }
            write(state)
        },
        removeItem(state, {payload}){
            state.list = state.list.filter(({id}) => id !== payload)
            write(state)
        }
    }
})

export const {addToCart, incrAmount, decrAmount, removeItem} = cartSlice.actions;
export default cartSlice.reducer

