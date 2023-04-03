<script lang="ts">
    import type { SingleAlbum } from "$lib/types";
    import { currentIndex, fullScreenState } from "$lib/stores";
	import Previous from "./Previous.svelte";
    import Next from "./Next.svelte";

    export let albumData: SingleAlbum;

    let albumLength = albumData.photos.length;

    $:photo_url = albumData.photos[$currentIndex].photo_base.url;

    function closeFullscreen(){
        fullScreenState.set(false);
    }
</script>


<main>
    <div class="closewrap">
        <button class="close" on:click={closeFullscreen} >Close</button>
    </div>
    <div class="container">
        <img src="{photo_url}" alt="">
    </div>
    <div class="controls">
        <Previous/>
        <Next {albumLength}/>
    </div>
</main>



<style>
    button.close{
        top: 5;
        z-index: 100;
        width: 100%;
        height:100%;
        cursor: pointer;
    }

    div.closewrap{
        z-index: 100;
        position: fixed;
        opacity: 0;
        cursor: pointer;
        height: 20vh;
        width: 100%;
    }

    div.closewrap:hover{
        opacity: 0.2;
    }


    div.container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        z-index: -1;
    }

    div.controls{
        position: fixed;
        display: flex;
        align-content: center;
        justify-content: space-between;

        top: 10px;
        height: 100%;
        width: 100%;
        z-index: 1;

    }
    img{
        margin: 0;
        max-height: 100vh;
        max-width: 100vw;
    }


</style>