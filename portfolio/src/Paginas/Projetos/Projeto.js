import React from 'react'
import { useParams } from 'react-router'

const Projeto = () => {

    const params = useParams()
    console.log(params)

    return (
        <div>
            Página do projeto
        </div>
    )
}

export default Projeto