const baseUrl = 'https://localhost:7271'

export async function getProductSearchParameters(){
    const response = await fetch(`${baseUrl}/api/parameters/productSearchParameters`);
    const responseJson = await response.json();
    
    return responseJson;
}

export default{
    getProductSearchParameters
}
