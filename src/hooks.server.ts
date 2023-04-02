import type { Handle, redirect } from '@sveltejs/kit';
import { strapiVerify } from '$lib/strapi';

export const handle: Handle = async ({event, resolve}) => {
    //get cookies
    const session = event.cookies.get('session');

    if (!session){
        // if there is no session load page as normal
        return await resolve(event)
    }

    const response = await strapiVerify(session);
    const user = await response.json();
    
    if (user){
        event.locals.user = {
            name: user.username,
            token: session 
        }
    }

    return await resolve(event);
}