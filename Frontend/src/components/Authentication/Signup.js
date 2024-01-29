import './Signup.css'
import google from '../../assets/google-signup.png'
const Signup =()=>{
    return (
        <div className='main-div'>
        <div className="Signup-Main">
        <div style={{width:'100%',paddingLeft:'20rem'}} className='tf-right-bg-blob absolute-center'></div>
        <div style={{padding:'1rem 0 0 6rem'}}>
            <h1 style={{color:'black',fontFamily:'monospace'}}>SIGNUP</h1>
            <div style={{display:'flex'}}>
            <input className='signup-input' placeholder='Name'/>
            <input style={{marginLeft:'4rem'}} className='signup-input' placeholder='Email'/>
            </div>
            <div style={{display:'flex',marginTop:'2rem'}}>
            <input className='signup-input' placeholder='Mobile'/>
            <input style={{marginLeft:'4rem'}} className='signup-input' placeholder='Create Password'/>
            </div>
            <div style={{display:'flex',marginTop:'2rem'}}>
            <select className='signup-select'>
                <option>Select the Preferences</option>
            </select>
            <select style={{marginLeft:'4rem'}}  className='signup-select'>
                <option>Select the Type </option>
            </select>
            </div>
            <div style={{marginTop:'1rem'}}>
                <button className='btn-signup'>SIGNUP</button>
            </div>
            <div className='google-signup' style={{cursor:'pointer'}} onClick={()=>{alert('click on google')}}> 
                <div style={{padding:'0.5rem 0 0 1rem',fontFamily:'monospace'}}>Signup with Google</div>
                <div style={{padding:'0.2rem 2rem 0 2rem'}}><img src={google}/></div> 
           </div>
        </div>
        </div>
       </div>
    ) 
}
export default Signup;
