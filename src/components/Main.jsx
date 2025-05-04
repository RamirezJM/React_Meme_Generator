import {useState} from 'react'


export default function Main() {

   const [memeObject, setMemeObject] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imageUrl: 'http://i.imgflip.com/1bij.jpg'
   })

   function handleChange(eve){
    const {value, name} = eve.currentTarget
    /* setMemeObject(prevText => ({...prevText, topText: value })) */
    setMemeObject(prevText => {
      return {...prevText, [name]:value}
    })

   }

  return (
    <main>
      <div className="form">
        <div className="input-text">
        <label htmlFor="topText">Top Text</label>
        <input type="text" id="topText"placeholder="One does not simply" name="topText" value={memeObject.topText} onChange={handleChange}/>
        <label htmlFor="bottomText">Bottom Text</label>
        <input type="text" id="bottomText" placeholder="Walk into Mordor" name="bottomText" value={memeObject.bottomText} onChange={handleChange}/>
        </div>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeObject.imageUrl}/>
        <span className="top">{memeObject.topText}</span>
        <span className="bottom">{memeObject.bottomText}</span>
      </div>
    </main>
  )
}