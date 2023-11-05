
export async function fetchDiscountOrder(type){
    const resp = await fetch(`http://localhost:3333/${type}/send`,{
        method: 'POST',
        body: JSON.stringify(type),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    console.log(resp.data);
}



	