<script lang="ts">
    import type { SingleAlbum } from "$lib/types";
    import { currentIndex } from "$lib/stores";
	import Previous from "./Previous.svelte";
    import Next from "./Next.svelte";

    export let albumData: SingleAlbum;

    let albumLength = albumData.photos.length;

    $:photo_url = albumData.photos[$currentIndex].photo_base.url;

    console.log(photo_url)
</script>

<div class="container">
    <img src="{photo_url}" alt="">
</div>
<div>
    <Next {albumLength}/>
    <Previous/>
</div>



<style>
    div.container{
        display: flex;
        justify-content: center;
        align-content:center;
        height: 100%;
    }
    img{
        margin: 0;
        max-height: 100vh;
        max-width: 100vw;
    }

</style>