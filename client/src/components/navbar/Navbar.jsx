import './navbar.css'
import not from '../../assets/not1.png'
import msg from '../../assets/email.png'
import set from '../../assets/settings.png'


const Navbar = () => {
  return (
    <div className='navbar'>
     <span className='logo'>Tompolo</span>
     <div className='icons'>
        <div className='icon'>
         <img src={not} alt='' className='iconImg'/>
        <div className='counter'>2</div>
        </div>

        <div className='icon'>
         <img src={msg} alt='' className='iconImg'/>
        <div className='counter'>2</div>
        </div>

        <div className='icon'>
         <img src={set} alt='' className='iconImg'/>
        <div className='counter'>2</div>
        </div>
     </div>
    </div>
  )
}

export default Navbar
