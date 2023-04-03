<script lang="ts">
    import '../global.css'
</script>

<slot/>


<footer>
    <a href="/">Don Photography</a>
</footer>

<style>

    footer{
        background-color: #0d1321;
        z-index: 2;
        position: fixed;
        bottom: 0;

        width: 100%;
        padding: 5px;
    }

    a{
        font-weight: bold;
        font-size: large;
        text-align: left;
    }

</style>