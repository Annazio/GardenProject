
export async function fetchDiscountOrder(data){
    const resp = await fetch(`http://localhost:3333/${data.nameInput}/send`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })  
    console.log(resp.nameInputValue);
}



	