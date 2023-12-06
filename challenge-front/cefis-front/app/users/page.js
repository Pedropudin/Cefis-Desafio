"use client";

//Import react element
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

//import "./User.css";

function userPage({params}) {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
    fetch("http://localhost:8000/user/" + id)
    .then(res => res.json())
    .then(data => {
        setData(data);
    })
    .catch(error => {
        console.error("There was an error:",error)
    });
    }

    let name;

    if(data.user == undefined){
        name='Loading...';
    } else{
        name = data.user.first_name
    }

    console.log(name)

  return (
    <div align="center">
      <p></p>
    </div>
  );
}

export default userPage;