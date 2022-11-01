import React, { useState } from 'react'
import './Card.css'

function Card() {
    const [profile_name, setName] = useState('Jenifer Kessy');
    const [job, setjob] = useState('Front-End Software Developer');
    //const [slack_username, setSlack_username] = useState('starnherm223@gmail.com');

  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img id ='profile__image' src="https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/305769090_3402880376609538_1305345758498305516_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGzQayO6VCcUEzysRLjgFwpUQawl9PWQp5RBrCX09ZCnkWdMBDAczyfOH_CeVFJbzF6x0zAASz8Y7unrUks3lVL&_nc_ohc=KdonbLOISaIAX-7LHdq&_nc_ht=scontent.fmba5-1.fna&oh=00_AfB2ENio_xCTYl1nFu2T7qknt32OsKhhDlc2McGqFcPEOw&oe=63664A55" alt=' ' height= "100px" width= "100px" />
            </div>

        </div>
        <div className='lower-container'>
            <h3>{ profile_name }</h3>
            <h4>{ job }</h4>

            
            <button>
            <a id='btn__zuri' href = "https://training.zuri.team/">Join our unternship training program at Zuri     </a>
            </button>
            

            
            <button>
            <a id='books' href = "http://books.zuri.team">Check our design and coding library for books and other learning materials</a>
            </button>       
            
            <button>
            <a id='book__python' href = "https://books.zuri.team/python-for-beginners?ref_id=hermanflex">Learn python with this 69% discounted book</a>
            </button>
        
            <button>
                <a id='pitch' href = "https://background.zuri.team" >Order a quick background check on coders from me before hiring them </a>
            </button>

            <button>
                <a id='book__design' href = "https://books.zuri.team/design-rules">Grab a free copy of Zuri's design book</a>
            </button>

        </div>
    </div>
  )
}

export default Card