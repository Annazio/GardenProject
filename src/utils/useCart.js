import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slice/productSlice";


export function useCart(){
    const {cart, products} = useSelector(state => state);
    const {status, list} = products;
    
    
const dispatch = useDispatch()
    useEffect(()=> {
        if(!products.length){
          dispatch(fetchProducts())
        }
    }, [])

    if (status !== 'ready') {
        return []
    }

    const result = cart?.list.map(item => {
        const product = list.find(({id}) => id === item.id)
        return {...item, ...product}
    })
    return result
} 

