'use strict'

import { getContatos, getContato, postContato, putContato, deleteContato } from "./contatos.js"

const novoContato = {
    "nome": "Ryan Alcantara dos Santos",
    "celular": "11 9 8323-0652",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "ryanalcantara@gmail.com",
    "endereco": "engenheiro cardoso",
    "cidade": "itapevi"
}

console.table(await postContato(novoContato))