import React, { useState } from 'react'
import data  from "./data"


function Array() {
const [people, setPeople] = useState(data)

  const remove = (id) => {
    let newPeople = people.filter(p => p.id !== id);
    setPeople(newPeople)};
  return (
    <>
    
    
  
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person)=> {
        const {id,name, age , image } = person
        return (
        
            <article key={id} className= "person flex">
              <div>  
               <img src={image} alt={name} />
               <div>
                <h4>{name}</h4>
                <h4>{age} years</h4>
               </div>
             </div>
             <div><button className='btn' onClick={() => remove(id)}> Remove</button></div>  

            </article>
        )
        })}
        <button className='button' onClick={() => setPeople([])}>Clear All</button>
      </section>  
    </main>
   
    </>
  )
}
export default Array