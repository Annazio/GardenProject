import { useSelector } from "react-redux";


export function useCart(){
    const {cart, products} = useSelector(state => state);
    const {status, list} = products;
    

    if (status !== 'ready') {
        return []
    }

    const result = cart.list.map(item => {
        const product = list.find(({id}) => id === item.id)
        return {...item, ...product}
    })
    return result
}