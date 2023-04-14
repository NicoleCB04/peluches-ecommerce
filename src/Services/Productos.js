const baseUrl = 'https://localhost:7271'

export async function getProducts(tagSearch, firstSearchId, secondSearchId, keyword){
    const response = await fetch(`${baseUrl}/api/products/search?tagSearch=${tagSearch}&firstSearchId=${firstSearchId}&secondSearchId=${secondSearchId}&keyword=${keyword}`);
    const responseJson = await response.json();
    
    return responseJson;
}

export default{
    getProducts
}