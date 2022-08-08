    import React,{useEffect,useState} from 'react'

    const Contact = () => {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [formStatus, setFormStatus] = useState(false);
  
      const handleSubmit = (event) => {
          event.preventDefault();
          console.log('form submit clicked...');
          console.log('FormData', username, email, message);
          setFormStatus(true);
          setUsername('');
          setEmail('');
          setMessage('');
      }
  
      const input_username = (event) => {
          console.log('input username', event.target.value);
          setUsername(event.target.value);
      }
      const input_email = (event) => {
          console.log('input email', event.target.value);
          setEmail(event.target.value);
      }
      const input_message = (event) => {
          console.log('input password', event.target.value);
          setMessage(event.target.value);
      }
  
      useEffect(() => {
          setTimeout(() => {setFormStatus(false);}, 20000)
      }, [formStatus])
  
    
      return (
        <>
        <section className="about-heading">
        <h2>Contact Us</h2>
        <form  name="myform" class=" pl-3 pr-3 form-horizontal" method="post" enctype="multipart/form-data">
          <div className='mx-5'>
            <div className='row'>
              <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" required>Name:</label>
                  <input type="text" class="form-control" onChange={input_username}  placeholder="Enter your name" value={username} required/>
                  {/* <div className='text-danger'>{formErrors.username}</div> */}
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email:</label>
                    <input type="email" class="form-control" onChange={input_email} placeholder="Enter your email" value={email} required/>
                    {/* <div className='text-danger'>{formErrors.email}</div> */}
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                      <textarea type="text" class="form-control" onChange={input_message}placeholder="Enter your message" rows="3" value={message} required></textarea>
                      {/* <div className='text-danger'>{formErrors.message}</div> */}
                      </div>
                      <div className='mb-3'>
                        <button type="submit" class="btn btn-warning"  onClick={handleSubmit}>submit</button>
                        
                      </div>
                      <div>
                        {formStatus && <div><b>Your message has been send...</b></div>}
                     </div>
                        </div>
                        </div>
                        </div>
                        </form>
                        
                        
    
                       
              
                        </section>
                       
                     </>

          
    
      );
    }

    export default Contact;
