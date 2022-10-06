import { Button } from "@mui/material";
import { Descr, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.styles";

const Lista = () => {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/caioed77.png"></Foto>
                <Informacoes>
                    <Nome>Caio Eduardo</Nome>
                    <Valor>R$ 1000,00</Valor>
                    <Descr>Aulas de programção</Descr>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista;