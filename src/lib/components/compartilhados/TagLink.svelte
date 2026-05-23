<script lang="ts">
    import Tag from "./Tag.svelte";

    export let href: string;
    export let desabilitada = false;

    function aoClicar(event: MouseEvent) {
        if (desabilitada) {
            event.preventDefault();
        }
    }
</script>

<a
    {href}
    aria-disabled={desabilitada}
    tabindex={desabilitada ? -1 : undefined}
    on:click={aoClicar}
>
    <Tag ativa={true} tamanho="lg" {desabilitada}>
        <slot></slot>
    </Tag>
</a>
