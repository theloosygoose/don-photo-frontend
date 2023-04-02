import { redirect } from '@sveltejs/kit'
import { strapiGetAllAlbums } from '$lib/strapi';

import type { PageServerLoad } from './$types'
import type {AlbumThumbnails, strapiAPIin} from '$lib/types';

export const load: PageServerLoad = async ({ event, locals }) => {
    if (!locals.user){
        throw redirect(302, '/login')
    }

    let res_allAlbums = await strapiGetAllAlbums(locals.user.token);
    let album_data= await res_allAlbums.json()

    let album_thumbnails = album_data.data.map(( i:strapiAPIin ) :AlbumThumbnails => {
        return {
            id: i.id,
            handle: i.attributes.handle,
            title: i.attributes.Title,
            year: i.attributes.Year,
            album_cover_thumbnail: i.attributes.Photos.data[0].attributes.formats.thumbnail.url,
            album_cover_small: i.attributes.Photos.data[0].attributes.formats.small.url,
        }
    })


    return {
        album_thumbnails
    };
}
