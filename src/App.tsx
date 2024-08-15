import { useState } from "react"
// import PersonList from "./components/PersonList"
import RegistrationForm from "./components/RegistrationForm"
import Student from "./models/student"
import { ListGroup, Container, Row, Col } from "react-bootstrap"
import './index.css'
 
function App() {

const [student, setStudents] = useState<Student[]>([])
const[count, setCount] = useState(1)
  const addStudent = (AnyStd:Student):void=>{
    setStudents((prev)=>[...prev, AnyStd])
  }
  return (

    < Container >  
    <Row className="gap-5">
      {/* here xs=6 defines the wider portion. */}
      <Col className="bg-slate-200  mt-4 text-center">
      <section>
      <h3 className="text-green-500 mt-5 font-semibold">Students List</h3>
      <ListGroup className="gap-2">
        {student.map((item,index)=>(
          <ListGroup.Item key={index}> {item.firstName} {item.lastName}, {item.age} years old and in grade {item.gradeNumber}th</ListGroup.Item>
        ))}
      </ListGroup>
      </section>
      </Col>

      <Col className="">
      <RegistrationForm onFormSubmit={addStudent}/>
      </Col>
    </Row>
  </Container>

  )
}

export default App
