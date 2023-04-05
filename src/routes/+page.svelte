<script lang="ts">
    import type { AlbumThumbnails } from "$lib/types";
    export let data;

    let album_thumbnails:Array<AlbumThumbnails> = data.album_thumbnails;
    console.log(album_thumbnails);
</script>

<h1>All Albums</h1>


{#each album_thumbnails as album }
<a href="/{album.handle}">
      <div class="album_card">
        <h2>{album.title}</h2>
        <p>{album.year}</p>
        <img src="{album.album_cover_thumbnail}" alt="">
    </div>
</a>
{/each}


<style>
    h1{
        font-size: 3rem;
        margin-bottom: 10px;
    }
</style>

