<script lang="ts">
    import { minhaLista } from "$lib/stores/minhaLista";

    import Tag from "../../compartilhados/Tag.svelte";

    export let ingrediente: string;

    $: selecionado = $minhaLista.includes(ingrediente);

    function aoClicar() {
        minhaLista.alternarIngrediente(ingrediente);
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
