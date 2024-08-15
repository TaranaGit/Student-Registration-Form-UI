import React, { useState } from "react";
import Student from "../models/student";
import Grade_Name from "../constant/gradeLavel";
import './RegistrationStyle.css';
import { Button, Form } from "react-bootstrap";

// Define the type that the registrationForm will receive

type RegistrationFormProps= {
  onFormSubmit: (formdata:Student) => void
}
const RegistrationForm = ({onFormSubmit}:RegistrationFormProps) => {

    const [student, setStudent] = useState<Student>({
        firstName:'',
        lastName:'',
        age:0,
        gradeNumber:0
// we did not add the grade, as it it optional.
    })
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      onFormSubmit(student)
      //then make element value as empty-space
      setStudent({
        firstName:'',
        lastName:'',
        age:0,
        gradeNumber:0}
      )
    }
  return (
    <div className=" bg-blue-950 font-bold text-white pt-4 font-serif p-4 mt-4">
        <h1 className="text-center">Student Registration Form</h1>
        <p>Fill in this form to register</p>
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="firstname">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" required placeholder="firstName"  value={student.firstName} 
                onChange={(e)=>{setStudent((mostRecent)=>({...mostRecent, firstName:e.target.value}))
              }}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="lastName"  value={student.lastName}
            onChange={(e)=>{setStudent((mostRecent)=>({...mostRecent, lastName:e.target.value}))}}
              />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
      <Form.Label>Age</Form.Label>
      <Form.Control placeholder="age"
        //  value={student.age}
        onChange={(e)=>{setStudent((mostRecent)=>({...mostRecent, age:Number(e.target.value)}))}}
        />
      </Form.Group>
      
      {/* for grade level.......... */}
      <Form.Group className="mb-3" controlId="gradelevel">
      <Form.Label>Grade Level</Form.Label>
      <Form.Select onChange={(e)=>{setStudent((prev)=>({...prev, gradeNumber:Number(e.target.value)}))}}>
            {
            Grade_Name.map((item, index)=>(
                <option key={index} value={index+1}>{item}</option>
            )
        )
        }
      aria-label="Default select example"

      </Form.Select>
      </Form.Group>



        {/* for gradeNumber, we will select options: 1,2,3,4 */}
        {/* <select onChange={(e)=>{setStudent((prev)=>({...prev, gradeNumber:Number(e.target.value)}))}}>
            {
            Grade_Name.map((item, index)=>(
                <option key={index} value={index+1}>{item}</option>
            )  )}
        </select> */}


        <Button className="p-2" type="submit">Complete Registration</Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
