<script lang="ts">
    import Tag from "./Tag.svelte";

    export let ingrediente: string;

    let selecionado = false;

    function aoClicar() {
        selecionado = !selecionado;
    }
</script>

<button on:click={aoClicar}>
    <Tag ativa={selecionado}>{ingrediente}</Tag>
</button>

<style>
    button {
        cursor: pointer;
    }
</style>