<script lang="ts">
    import FullscreenView from '$lib/FullScreenView/FullscreenView.svelte';
	import { currentIndex, fullScreenState } from '$lib/stores';
    import type { SingleAlbum } from '$lib/types';

    export let data;
    let albumData:SingleAlbum = data.singleAlbumData[0];


    function openFullscreen(){
        fullScreenState.set(true);
    }
</script>


{#if $fullScreenState}
    <FullscreenView {albumData}/>
{/if}

{#if !$fullScreenState}
    <main>
        <h1>{albumData.title}</h1>
        <h2>{albumData.year}</h2>
        <p>{albumData.description}</p>
        <div class="container">
            <div class="gallery">
                {#each albumData.photos as photo}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img data-photo-id="{photo.photo_index}" on:click={openFullscreen} on:pointerover={( i ) => currentIndex.set(parseInt(i.target.dataset.photoId))} src="{photo.photo_medium.url}" alt="">
                </div>
                {/each}
            </div>
        </div>
    </main>
{/if}

<style>
    .container {
        margin-left: 5%;
        margin-right: 5%;
    }

    .gallery{
        display:flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: center;
    }

    .gallery > div {
        height: 500px;
        cursor: pointer;
        position: relative;
    }
    .gallery div img{
        object-fit:cover;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        border-radius: 5px;
    }

</style>