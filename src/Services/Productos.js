const baseUrl = 'https://localhost:7271'

export async function getProductSearchParameters(){
    const response = await fetch(`${baseUrl}/api/parameters/productSearchParameters`);
    const responseJson = await response.json();
    
    return responseJson;
}

export async function getProducts(tagSearch, firstSearchId, secondSearchId, keyword){
    const response = await fetch(`${baseUrl}/api/products/search?tagSearch=${tagSearch}&firstSearchId=${firstSearchId}&secondSearchId=${secondSearchId}&keyword=${keyword}`);
    const responseJson = await response.json();
    
    return responseJson;
}

export async function getProduct(idProduct){
    const response = await fetch(`${baseUrl}/api/products/get/${idProduct}`);
    const responseJson = await response.json();
    
    return responseJson;
}

export default{
    getProductSearchParameters,
    getProducts,
    getProduct
}