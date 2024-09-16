import React from 'react'
import './nav.css'
import SearchIcon from '@mui/icons-material/Search';
const Nav = () => {
  return (
    <div>
        <div className='nav1'>

        
             <div className='opt op1'>
             भारत सरकार
             </div>
             <div className='opt op2'>
             GOVERNMENT OF INDIA

             </div>
             <div className='opt op3'>
             <input type='text' placeholder='Search'></input>
             <div className='search_icon'>
             <SearchIcon/>
             </div>
             </div>
             <div className='opt op4'>
                Sign-in
             </div>
             <div className='opt op5'>
                language
             </div>
        </div>
        <div className='nav2'>
             <img src='t_500x300.jpg' />
             <img src='swach-bharat.png'/>
        </div>
        <div className='nav3'>
           <button>option 1</button>
           <button>option 2</button>
           <button>option 3</button>
           <button>option 4</button>
           <button>option 5</button>

        </div>
    </div>
  )
}

export default Nav