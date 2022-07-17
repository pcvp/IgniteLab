import { gql, useQuery } from "@apollo/client"

const GET_QUERY_LESSIONS = gql`
  query{
    lessons{
      id,
      title
    }
  }
`

function App() {
const { data }= useQuery(GET_QUERY_LESSIONS)  
console.log(data);

  

  return (
   <h1 className='text-2xl text-violet-900'>Teste</h1>
  )
}

export default App
