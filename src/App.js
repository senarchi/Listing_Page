
import './App.css';
import React, { useEffect, useState } from 'react'
import JsonData from './frontend/components/data.json';
import ReactPaginate from 'react-paginate';
import  axios  from 'axios';
import ModalPopup from './frontend/components/ModalPopup';



function App() {
  
  const [apiResponse,setApiResponse]=useState("");

  useEffect(()=>{
    fetch('http://localhost:5000/api/',{
      method:'GET',
      mode:'no-cors',
      headers:{
        accept:'application/json',
      }
    })
    .then(res=> {res.json()})
    .then((data)=>{
      console.log(data)
      setApiResponse(data)
    })
    .catch(err=>console.log("Failed"))
    
  },[]);
  const [users,setUsers]=useState(JsonData.slice(0,998));
    const [pageNumber,setPageNumber]=useState(0);

    const usersPerPage=25;
    const pagesVisited=pageNumber*usersPerPage;

    const displayUsers=users.slice(pagesVisited,pagesVisited+usersPerPage)
    .map((user)=>{
        return(
            <div className='user'>
                <h3>USER: {user.User}</h3>
                 <h3>NAME: {user.Name}</h3>
                  <h3>DATE: {user.Date}</h3>
            </div>
        )
    });

    const PageCount=Math.ceil(users.length/usersPerPage);
    const changePage=({selected})=>{
        setPageNumber(selected)
    }

  return (
    <div className='App'>
      {/* <h1>LISTING</h1> */}
       {apiResponse}
      {displayUsers}
      <ModalPopup/>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={PageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
