export const FormatadorService = {
    valorMonetario(valor: number): string {
        return valor.toLocaleString(
            'pt-BR',
            {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            }
        );
    },

    limitarTexto(texto: string, tamanhoMax: number): string{
        if (texto.length < tamanhoMax){
            return texto;
        }

        return texto.slice(0, tamanhoMax) + '...';
    }
}