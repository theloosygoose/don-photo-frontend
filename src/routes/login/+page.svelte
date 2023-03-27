
<script lang="ts">
    import type { ActionData } from './$types';
    export let form: ActionData;

</script>

<main>

    <form action="?/login" method="POST">
        <label for="username">
            Username:
            <input type="text" name="username" id="username" required>
        </label>
        <label for="password">
            Password:
            <input type="password" name="password" id="password" required>
        </label>
        <button type="submit">Log In</button> 
    </form>

    {#if form?.invalid}
        <p class="warning">Input a Password</p>
    {/if}

    {#if form?.credentials}
        <p class="warning">Password is Incorrect</p>
    {/if}

</main>

<style>
    form {
        margin-top: 10%;
    }

    .warning{
        background-color: red;
        opacity: 0.3;
        color: white;
    }

</style>