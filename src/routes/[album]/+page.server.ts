import { redirect } from '@sveltejs/kit'
import { strapiGetAllAlbums, strapiGetSingleAlbum } from '$lib/strapi';

import type { PageServerLoad } from './$types'
import type { AlbumThumbnails, StrapiResponseAllAlbums, StrapiResponseSingleAlbum } from '$lib/types';

export const load: PageServerLoad = async ({ params, locals }) => {
    if (!locals.user){
        throw redirect(302, '/login')
    }

    const handle = params.album;

    let res_singleAlbum = await strapiGetSingleAlbum(locals.user.token, handle);
    let album_data = await res_singleAlbum.json();

    let index = 0;

    let singleAlbumData = album_data.data.map((i:StrapiResponseSingleAlbum) => {
        return {
            id: i.id,
            handle: i.attributes.handle,
            title: i.attributes.Title,
            year: i.attributes.Year,
            description: i.attributes.Description,
            photos: i.attributes.Photos.data.map((i: { id: any; attributes: {
                url: any; name: any; caption: any; formats: { medium: { url: any; height: any; width: any; }; }; height: any; width: any; 
}; }) => {
                index = index + 1;
                return {
                    photo_id: i.id,
                    photo_index: index - 1,
                    photo_name: i.attributes.name,
                    photo_caption: i.attributes.caption,
                    photo_medium: {
                        url: i.attributes.formats.medium.url, 
                        height:i.attributes.formats.medium.height,
                        width: i.attributes.formats.medium.width
                    },
                    photo_base: {
                        url: i.attributes.url,
                        height: i.attributes.height,
                        width: i.attributes.width
                    }
                }
            })
        }
    });


    return {
        singleAlbumData
    };
 }
