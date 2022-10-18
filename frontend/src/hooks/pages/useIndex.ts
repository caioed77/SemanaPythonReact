import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex(){
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [nome, setNome] = useState(''); 
    const [email, setEmail] = useState('');
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null);
    const [mensage, setMensage] = useState('');
    useEffect(() => {
              ApiService.get('/professores').then((resposta) => {
                setListaProfessores(resposta.data)
              })
           }, []);
    useEffect( () => {
      limparFormulario();
    }, [professorSelecionado]);

function marcarAula(){
  if(professorSelecionado !== null){
    if(validarDadosAula()){
        ApiService.post('/professores/'+ professorSelecionado.id +'/aulas', {
           nome,
           email
        }).then(() => {
           setProfessorSelecionado(null);
           setMensage('Cadastrado com sucesso');
        }).catch((erro)=>{
          setMensage(erro.response?.data.message);
        });
    } else {
      setMensage('Preencha os dados corretamente');
    } 
  }

}
    
function validarDadosAula(){
  return nome.length > 0 && email.length > 0;
}

function limparFormulario(){
  setNome('');
  setEmail('');
}
    
    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        professorSelecionado,
        setProfessorSelecionado,
        marcarAula,
        mensage, 
        setMensage
    }
}