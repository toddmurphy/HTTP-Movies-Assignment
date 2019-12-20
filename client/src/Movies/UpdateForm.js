import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UpdateForm = (props) => {
    //setup useState to set initial state/data for PUT form
    const [updateData, setUpdateData] = useState({
        id: '',
        title: '',
        director: '',
        metascore: Number(),
        stars: []
    })
    console.log(props)

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                setUpdateData(res.data)
            })
    },[props.match.params.id])
    


    //handleInputChanges
    const handleInputChanges = (event) => {
        setUpdateData({
            ...updateData,
            [event.target.name]: event.target.value
        })
    }

    //handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault();
        //make axios PUT request to the api
        axios
            .put(`http://localhost:5000/api/movies/${props.match.params.id}`, updateData)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log('Movie not updated', error)
            })
            props.history.push(`/`)
    }

    return(
        <div>
            <h3>Put/Edit Form Component</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={updateData.title}
                    onChange={handleInputChanges}
                />
                <input 
                    type='text'
                    name='director'
                    placeholder='Director'
                    value={updateData.director}
                    onChange={handleInputChanges}
                />
                <input 
                    type='number'
                    name='metascore'
                    placeholder='Metascore'
                    value={updateData.metascore}
                    onChange={handleInputChanges}
                />
                <input 
                    type='text'
                    name=''
                    placeholder='Stars'
                    value={updateData.stars}
                    onChange={handleInputChanges}
                />
                <button type='submit'>Update movies</button>
            </form>
        </div>
    )
}

export default UpdateForm;

/*Data structure
    id: 5,
    title: 'Tombstone',
    director: 'George P. Cosmatos',
    metascore: 89,
    stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],*/
  