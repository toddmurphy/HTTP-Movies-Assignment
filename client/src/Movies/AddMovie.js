import React, {useState} from 'react';

const AddMovie = () => {
    //setup useState for adding and setting a new movie
    const [addMovie, setAddMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: Number(),
        stars: []
    })
    
    //handleInputChanges


    //handleSubmit


    return(
        <div>
            <h3>Add a new movie component</h3>
            <form>
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    // value={}
                    // onChange={handleInputChanges}
                />
                <input 
                     type='text'
                     name='director'
                     placeholder='Director'
                    //  value={}
                    //  onChange={handleInputChanges} 
                />
                <input 
                    type='metascore'
                    name='metascore'
                    placeholder='Metascore'
                    // value={}
                    // onChange={handleInputChanges}
                />
                <input 
                    type='text'
                    name=''
                    placeholder='Stars'
                    // value={}
                    // onChange={handleInputChanges}
                />
                <button type='submit'>Update movies</button>
            </form>
        </div>
    )
}

export default AddMovie;

// { Data structure to add movie
//     id: 5,
//     title: 'Tombstone',
//     director: 'George P. Cosmatos',
//     metascore: 89,
//     stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
//   }