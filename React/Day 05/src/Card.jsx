import React, { useState } from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export default function Card(props) {
    const [toggle, setToggle] = useState(true);

    function toggleHandler() {
        setToggle(!toggle)
    }
    return (
        <div className='col-3'>
            <div className="card" >
                <img src={props.item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}</h5>
                    <button onClick={toggleHandler} href="#" className={`btn ${toggle ? 'btn-primary' : 'btn-danger'} `}>
                        {
                            toggle == true ?
                                <AiFillLike />
                                :
                                <AiFillDislike />

                        }


                    </button>
                </div>
            </div>


        </div>
    )
}


