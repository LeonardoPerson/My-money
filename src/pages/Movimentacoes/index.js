import React from 'react'
import {Redirect} from 'react-router-dom'
import {useMovimentacaoApi} from '../../api'
import InfoMes from './InfoMes'
import AdicionarMovimentacao from './AdicionarMovimentacao'

//////////////////////////////////////////////////////////////////

const Movimentacoes = ({match}) => {
    
    const {movimentacoes, salvarNovaMovimentacao, removerMovimentacao} = useMovimentacaoApi(match.params.data)   
    //gestão do formulário
   
    //----------------------------------------------------------------------------

    //----------------------------------------------------------------------------
    const salvarMovimentacao = async(dados) => {        
            await salvarNovaMovimentacao(dados)        
            movimentacoes.refetch()
            await sleep(2000)
            //infoMes.refetch()  
            
    }
    //------------------------------------------------------------------------------
    const sleep = time => new Promise(resolve => setTimeout(resolve, time))
    const removerMovimentacaoClick = async(id) => {
        await removerMovimentacao(`movimentacoes/${match.params.data}/${id}`)
        movimentacoes.refetch()
        await sleep(2000)
        //infoMes.refetch()        
    }
    //----------------------------------------------------------------------------
    

    if(movimentacoes.error === 'Permission denied'){
        return <Redirect to='/login' />
    }


    //----------------------------------------------------------------------------
    return (
        <div className='container'>
            <h1>Movimentações</h1>
            <InfoMes data={match.params.data} />
       
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {movimentacoes.data &&
                        Object
                        .keys(movimentacoes.data)
                        .map(movimentacao => {
                            return (
                                <tr key={movimentacao}>
                                    <td>{movimentacoes.data[movimentacao].descricao}</td>
                                    <td className='text-right'>
                                        {movimentacoes.data[movimentacao].valor} {'  '}
                                        <button className='btn btn-danger' onClick={() => removerMovimentacaoClick(movimentacao)}>-</button>
                                    </td>
                                </tr>                            
                            )
                        })
                    }
                   
                <AdicionarMovimentacao salvarNovaMovimentacao={salvarNovaMovimentacao}/>
                </tbody>
            </table>    
        </div>
    )
  }

export default Movimentacoes
  