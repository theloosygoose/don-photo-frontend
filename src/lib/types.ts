type Photo = {
    url: string,
    height: number,
    width: number 
}

export type PhotoData = {
	photo_index: number;
    photo_id: number,
    photo_name: string,
    photo_caption: string,
    photo_medium: Photo,
    photo_base: Photo
}

export type AlbumThumbnails = {
    id: number,
    handle: string,
    title: string,
    year: string,
    album_cover_thumbnail: string,
    album_cover_small: string
};

export type SingleAlbum = {
    id: number,
    handle: string,
    title: string,
    year: string,
    description: string,
    photos: Array<PhotoData>

}


export type StrapiResponseAllAlbums = { id: any; 
    attributes: { 
        handle: any; 
        Title: any; 
        Year: any; 
        Photos: { 
            data: { 
                attributes: { 
                    formats: {
                        thumbnail: any; 
                        small: { 
                            url: any; 
                        }; 
                    }; 
                }; 
            }[]; 
        }; 
    }; 
} 


export type StrapiResponseSingleAlbum = { 
    id: any; 
    attributes: {
        Description: any;
        Photos: any; 
        handle: any; 
        Title: any; 
        Year: any; 
        description: any; 
        photos: { 
            data: any[]; 
        }; 
    }
}

