<script lang="ts">
    import { currentIndex } from "$lib/stores";

    function decrement() {
        if ($currentIndex > 0 ) {
            currentIndex.update((i:number) => i = i - 1);
        }
    }

</script>

<button on:click={decrement}>Prev.</button>

<style>
    button{
        height: 100%;
        width: 20%;
        opacity: 0;
        cursor: pointer;
    }

    button:hover{
        opacity: 0.2;
    }

</style>