import { writable } from "svelte/store";

function criarMinhaLista() {
    const { subscribe, set, update } = writable<string[]>([]);

    return {
        subscribe,
        set,
        adicionarIngrediente(ingrediente: string) {
            update((valorAtual) => {
                if (valorAtual.includes(ingrediente)) {
                    return valorAtual;
                }

                return [...valorAtual, ingrediente];
            });
        },
        removerIngrediente(ingrediente: string) {
            update((valorAtual) => valorAtual.filter(
                (item) => item !== ingrediente
            ));
        },
        alternarIngrediente(ingrediente: string) {
            update((valorAtual) => {
                if (valorAtual.includes(ingrediente)) {
                    return valorAtual.filter((item) => item !== ingrediente);
                }

                return [...valorAtual, ingrediente];
            });
        }
    };
}

export const minhaLista = criarMinhaLista();
