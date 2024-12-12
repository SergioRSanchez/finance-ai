//  ARQUIVO DE DEMONSTRAÇÃO DE ROTAS DINÂMICAS

interface TransactionProps {
  params: {
    id: string
  }
}

const Transaction = ({params: {id}}: TransactionProps) => {
  return (
    <div>Transaction {id}</div>
  )
}

export default Transaction