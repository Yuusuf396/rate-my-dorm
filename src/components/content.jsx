import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './content.css'
// import school from '../assets/pexels-scott-webb-305823.jpg'

 
function Content() {
    const [search, setSearch] = useState('');
    const searchBar=(e)=>{
        console.log( e.target.value);

        // console.log(search)
       setSearch(e.target.value) 
    }
   return (
     <>
        <div className='image-container'>
            {/* <img className='school-image' src={school} alt='school' loading='lazy'/> */}
           <div className='searchbar'>
            <input
            type='text'
            value={search}
            name='search'
            placeholder='Search Your Dorm'
            onChange={searchBar}
            />
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
           </div>
        </div>
        
     </>
   )
 }
 
 export default Content