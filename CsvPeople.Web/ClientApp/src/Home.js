import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [people, setPeople] = useState([]);


    useEffect(() => {
        const getPeople = async () => {
            const { data } = await axios.get(`/api/upload/GetAll`);
            setPeople(data);
        }
        getPeople();
    }, []);

    const onDelete = async () => {
        await axios.post(`api/upload/DeleteAll`)
        setPeople([]);

    }


    return (
        <>

            <div>
                <div className='col-md-6 offset-md-3 mt-5'>
                    <button className='btn btn-danger btn-lg btn-block' onClick={onDelete}>Delete All</button>
                </div>
            </div>
            <table className='table table-hover table-striped table-bordered mt-5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(people => <tr key={people.id}>
                        <td>{people.id}</td>
                        <td>{people.firstName}</td>
                        <td>{people.lastName}</td>
                        <td>{people.age}</td>
                        <td>{people.address}</td>
                        <td>{people.email}</td>
                    </tr>)}

                </tbody>
            </table>
                       </>
         )
   }


    export default Home;