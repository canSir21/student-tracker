export default function StudentTable({studentArr}) {
  return (
    <div class="table-container">
      <table>
        <caption>Our Client Data</caption>
       <tbody>
       {studentArr.map( ({id,firstName,lastName,email,gender}) => (
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>{gender}</td>
        </tr>
       ))}
       </tbody>
      </table>
    </div>
  )
}