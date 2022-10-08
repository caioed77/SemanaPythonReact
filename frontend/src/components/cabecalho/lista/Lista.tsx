import { Button } from "@mui/material";
import { Professor } from "../../../@types/professor";
import { Descr, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.styles";

interface ListaProps {
    professores: Professor[],
}


const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.image}></Foto>
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valor_hora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</Valor>
                                <Descr>{professor.descricao}</Descr>
                                <Button sx={{ width: '70' }}>Marcar Aula com Caio</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
               <ListaVazia>Nenhum item encontrado</ListaVazia>
            )

            }
        </div>
    )
}

export default Lista;