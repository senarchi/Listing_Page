import React, { useState } from 'react';
import './Modal.css';
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'


function ModalPopup() {
  const [name,setName]=useState("");
  const [username,setUserName]=useState("");
  const [date,setDate]= useState("");
  const[modal,setModal]=useState(false)

  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleUserName=(e)=>{
    setUserName(e.target.value)
  }
  const handleDate=(e)=>{
    setDate(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,username,date)
  }
  return (
    <div>
    <Modal
    size='lg'
    isOpen={modal}
    toggle={()=>setModal(!modal)}
    >
    
      <ModalHeader
      toggle={()=>setModal(!modal)}
      >
         Enter Details
      </ModalHeader>
      <ModalBody>
      <form onSubmit={handleSubmit}>
      <Row>
        <Col lg={15}>
        <div>
          <span>USER: </span>
            <input type='text' onChange={handleUserName}></input>
            </div>
        </Col>
        <Col lg={15}>
        <div>
          <span>NAME: </span>
            <input type='text' onChange={handleName}></input><br></br>
        </div>
      </Col>
      <Col lg={15}>
        <div>
          <span>DATE: </span>
            <input type='date' onChange={handleDate}></input><br></br>
        </div>
        </Col>
      </Row>
            <button className='submit'>Submit</button>
          </form>
      </ModalBody>
    </Modal>
    <button className='btn_user' onClick={()=>setModal(true)}>ADD USER</button>

          
      </div>  
  )
}

export default ModalPopup