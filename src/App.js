import './App.css';
import  Container  from './Container';
import StudentTable from './StudentTable';
import studentData from "./util/studentData"

function App() {
  return (
    <Container>
      <StudentTable studentArr={studentData()} />
    </Container>
  );
}

export default App;
