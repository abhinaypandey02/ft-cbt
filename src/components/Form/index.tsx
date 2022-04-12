import React from 'react';
import './styles.scss';

export default function Form({mini}:{mini:boolean}){
    return <form className="form">
        <div className="input-containers">
            <input className="base" placeholder="Your name"/>
            <input className="base" placeholder="Your email"/>
        </div>
        {!mini&&<div className="input-containers">

            <input className="base" placeholder="Subject"/>
        </div>}
        <div className="input-containers">

            <input className="base" placeholder="Phone Number"/>
        </div>
        <div className="input-containers">

            <textarea rows={4} className="base" placeholder="Text your message in here..."/>
        </div>
        <div className="input-containers">

            <button type="submit" className="submit">Send</button>
        </div>

    </form>
}
