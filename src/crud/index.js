import axios from 'axios';

const URL = 'http://localhost:8080/tarefas';

function getTarefasCadastradas() {
  const headers = { 'Accept': 'application/json' };
  return axios.get(URL, { headers: headers })
    .then(resposta => {
      return resposta.data
    } );
}

function salvarNovaTarefa(data) {
  const headers = { 'Accept': 'application/json' };
  return axios.post(URL, data, { headers: headers })
    .then(resposta => {
      return resposta.data
    } );
}

// function atualizarSituacao(id) {
//   const headers = { 'Accept': 'application/json' };
//   return axios.post(`${URL}/${id}`, id, { headers: headers })
//     .then(resposta => resposta.data );
// }

export default {
  getTarefasCadastradas,
  salvarNovaTarefa,
  // atualizarSituacao
};
