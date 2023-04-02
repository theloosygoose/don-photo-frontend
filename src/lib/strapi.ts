import jwt_decode from 'jwt-decode';

let url = `https://strapi-backend-neue.onrender.com/api`

export const strapiLogin = async ( username:string, password:string) => {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const body = {
        identifier: username,
        password: password
    }

    const strapi_response = await fetch(`${url}/auth/local`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })

    return strapi_response;
}

export const strapiVerify = async (strapiToken:string) => {

    let strapiDecoded:any = jwt_decode(strapiToken);
    let strapiUserId = strapiDecoded.id;
    console.log(strapiUserId);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${strapiToken}`)


    const strapi_response = await fetch(`${url}/users?filters[id][$eq]=${strapiUserId}`,{
        method:'GET',
        headers: headers,
    });

    return strapi_response;
}

export const strapiGetAllAlbums = async(strapiToken:string) => {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${strapiToken}`)


    const strapi_response = await fetch(`${url}/albums?populate=*`,{
        method:'GET',
        headers: headers,
    });

    return strapi_response;

}

export const strapiGetSingleAlbum = async (strapiToken:string, handle:string) => {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${strapiToken}`)

    const strapi_response = await fetch(`${url}/albums?filters[handle][$eq]=${handle}&populate=*`,{
        method:'GET',
        headers: headers,
    });

    return strapi_response;
    
}
