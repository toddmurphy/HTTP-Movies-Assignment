import React, {useState, useEffect} from 'react';

const UpdateForm = (props) => {
    //setup useState to set initial state/data for PUT form
    

    return(
        <div>
            <h3>Put/Edit Form Component</h3>
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
                    //value={}
                    //onChange={handleInputChanges}
                />
                <input 
                    type='metascore'
                    name='metascore'
                    //value={}
                    //onChange={handleInputChanges}
                />
                {movies.stars.map((star, index) => {
                    return(
                        <input 
                            key={index}
                            type='text'
                            name={movies.stars[index]}
                            placeholder='Stars'
                            //value={}
                            //onChange={handleInputChanges}
                        />
                    )
                })}
                <button>Update movies</button>
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
  