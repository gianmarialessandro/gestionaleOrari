import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([{}]);
  // useEffect(() => {
  //   fetch('http://localhost:8081/orari')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .then(data => setData(data))
  //   .catch(err => console.log(err))
  // }, [])


  useEffect(() => {
    fetch('http://localhost:8081/orari')
    .then(
      response => response.json()
    )
    .then(
      data => {
        setData(data)
      }
    )
  }, [])

  return (
    <div>
      <table>
      <thead>
        <th>nome</th>
        <th>congnome</th>
        <th>età</th>
        <th>matricola</th>
      </thead>
      <tbody>

         {( typeof data === 'undefined') ? (<p>Loading...</p>)
      :
      (
        data.map((user, i) => (
          <tr key={i}>
           <td>{user.nome}</td>
           <td>{user.cognome}</td>
           <td>{user.eta}</td>
           <td>{user.id}</td> 
          </tr>
        ))
      )}
      </tbody>
      </table>
    </div>
  )
}

export default App