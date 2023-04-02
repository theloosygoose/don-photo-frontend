<script lang="ts">
    import { currentIndex } from "$lib/stores";

    export let albumLength:number;


    function decrement() {
        if ($currentIndex < albumLength -1 ) {
            currentIndex.update((i:number) => i = i + 1);
        }
    }

</script>

<button on:click={decrement}>Next</button>

<style>

</style>