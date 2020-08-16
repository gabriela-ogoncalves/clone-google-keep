import axios from 'axios';

const URL = 'http://localhost:8080/tarefas';

function getTarefasCadastradas() {
  const headers = { 'Accept': 'application/json' };
  return axios.get(URL, { headers: headers })
    .then(resposta => resposta.data );
}

function salvarNovaTarefa(data) {
  const headers = { 'Accept': 'application/json' };
  return axios.post(URL, data, { headers: headers })
    .then(resposta => resposta.data );
}

function atualizarSituacao(tarefa, data) {
  const headers = { 'Accept': 'application/json' };
  return axios.put(`${URL}/${tarefa.id}`, data, { headers: headers })
    .then(resposta => resposta.data );
}

export default {
  getTarefasCadastradas,
  salvarNovaTarefa,
  atualizarSituacao
};
