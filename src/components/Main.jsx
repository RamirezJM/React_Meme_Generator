import {useState, useEffect} from 'react'

export default function Main() {

   const [memeObject, setMemeObject] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imageUrl: 'http://i.imgflip.com/1bij.jpg'
   })

   const [Allmeme, setAllMeme] = useState([])

   useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMeme(data.data.memes))
   }, [])

   function getImage(){
    if(Allmeme.length > 0){
      const number = Math.floor(Math.random() * Allmeme.length)
      const memeUrl = Allmeme[number].url
      setMemeObject(prevMeme => ({...prevMeme, imageUrl: memeUrl}))
    }else{
      console.log('loading...')
    }
 
   }

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
        <button onClick={getImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeObject.imageUrl}/>
        <span className="top">{memeObject.topText}</span>
        <span className="bottom">{memeObject.bottomText}</span>
      </div>
    </main>
  )
}