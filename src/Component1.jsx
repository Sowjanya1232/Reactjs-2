import Faker from  'faker';
function Component1(){
    return(
        <div className="container">
          
             <div className="ui comments">
               <div className="comment">
               <a className="avatar">
               <img style={{width:"50px",height:"50px"}} className="img" src={Faker.image.image()}/>
             </a>
             <div className="content">
                <a className="author"> <h3> Elliot Fu</h3> </a>
                <h4>Friends of Veronika</h4>
                Elloit requested permission to view your <br />contact details  <hr /><br />
                <div>
                    <input className='btn1' style={{width:"140px",height:"30px"}}type="text" value="Approve"/>
                    <input  className='btn2'style={{width:"140px",height:"30px"}}type="text" value="Decline"/>
                </div>
               
             </div>

            </div>
          </div>
        </div>
    )
}
function Component2(){
    return(
        <div className="d2">
             <div className="ui comments">
               <div className="comment">
               <a className="avatar">
               <img style={{width:"50px",height:"50px"}} className="img" src={Faker.image.image()}/>
             </a>
             <div className="content">
                <a className="author"> <h3> Jenny Hess</h3> </a>
                <h4>New Member</h4>
                Jenny Wants to add you to the group best <br />friends<hr /><br />  
             <div>
                    <input className='btn1' style={{width:"140px",height:"30px"}}type="text" value="Approve"/>
                    <input  className='btn2'style={{width:"140px",height:"30px"}}type="text" value="Decline"/>
                    
                </div>
             </div>
            </div>
          </div>

        </div>
    )
}

export {Component1,Component2};