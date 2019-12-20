import React, {useState} from 'react';
import axios from 'axios';

const AddMovieForm = (props) => {
    
    //setup useState for adding and setting a new movie
    const [addMovie, setAddMovie] = useState({
        id: Date.now(),
        title: '',
        director: '',
        metascore: Number,
        stars: []
    })
    console.log(addMovie)
    //handleInputChanges
    const handleInputChanges = (event) => {
        setAddMovie({
            ...addMovie,
            [event.target.name]: event.target.value
        })
    }

    //handleStarsInputChange
    const handleStarsChange = (event) => {
        setAddMovie({
            ...addMovie,
            [event.target.name]: event.target.value.split()
        })
    }

    //handleSubmit --> --> http://localhost:5000/api/movies
    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(`http://localhost:5000/api/movies`, addMovie)
            .then(response => {
                console.log(response)
                //set addMovie back to default initial empty state
                setAddMovie({
                    id: '',
                    title: '',
                    director: '',
                    metascore: '',
                    stars: []
                })
            })
            .catch(error => {
                console.log('Sorry, No movie addded!', error)
            })
            // props.history.push('/')
    }

    return(
        <div>
            <h3>Add a new movie</h3>
            <form onSubmit={handleSubmit} >
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={addMovie.title}
                    onChange={handleInputChanges}
                />
                <input 
                     type='text'
                     name='director'
                     placeholder='Director'
                     value={addMovie.director}
                     onChange={handleInputChanges} 
                />
                <input 
                    type='number'
                    name='metascore'
                    placeholder='Metascore'
                    value={addMovie.metascore}
                    onChange={handleInputChanges}
                />
                {/* Need a different handleChange for stars */}
                <input 
                    type={[]}
                    name='stars'
                    placeholder='Stars'
                    value={addMovie.stars}
                    onChange={handleStarsChange}
                />
                <button type='submit'>Add a new movie</button>
            </form>
        </div>
    )
}

export default AddMovieForm;

// { Data structure to add movie
//     id: 5,
//     title: 'Tombstone',
//     director: 'George P. Cosmatos',
//     metascore: 89,
//     stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
//   }