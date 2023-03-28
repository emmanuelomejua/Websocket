import './card.css'
import icon from '../../assets/hearts.png'
import icon1 from '../../assets/info.png'
import icon2 from '../../assets/share-2.png'
import icon3 from '../../assets/speech-bubble.png'
import icon4 from '../../assets/loading-heart--v1.png'
import { useState } from 'react'

const Card = ({post}) => {
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(true)
  }

  return (
    <div className='card'>
       <div className='info'>
        <img src={post.userImg} alt='' className='uImg'/>
        <span>{post.fullname}</span>
       </div>
       <img src={post.postImg} alt='' className='pImg'/>
       <div className='interaction'>
        {
          liked ? (
            <img src={icon4} alt='' className='cart'/>
          ) : (
            <img src={icon} alt='' className='cart' onClick={handleClick}/>
          )
        }
       
        <img src={icon3} alt='' className='cart'/>
        <img src={icon1} alt='' className='cart r'/>
        <img src={icon2} alt='' className='cart'/>
        
       </div>
    </div>
  )
}

export default Card
