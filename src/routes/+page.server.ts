import { handle, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { strapiGetAllAlbums } from '$lib/strapi';

export const load: PageServerLoad = async ({ event, locals }) => {
    if (!locals.user){
        throw redirect(302, '/login')
    }

    let res_allAlbums = await strapiGetAllAlbums(locals.user.token);
    let album_data= await res_allAlbums.json()

    let album_names = album_data.data.map((i) => {
       return {
        id: i.id,
        title: i.attributes.title,
        slug: i.attributes.handle
       } 

    })

    let album_photos = album_data.data.map((i)=> {
        return {
            album_id: i.id,
            album_slug:i.attributes.handle,
            album_title: i.attributes.title,
            photos: i?.attributes?.photos?.data?.map((z) => {
                return{
                    url: z?.attributes?.url,
                    caption: z?.attributes?.caption,
                }
            })
        }
    })
    



    return {
        album_names,
        album_data,
        album_photos
    };
}
