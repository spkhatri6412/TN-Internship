import React from 'react'
import './Login.css'


function Login()
{
  const questions = [
    {
      id : 1, 
      questions :"Which is most underrated villian?",
      options : ["Joker","Thanos","Rocky","Kaurvas"],
      correctAnswer : "Joker"
    },

    {
      id : 2, 
      questions : "Which is most underrated superhero?",
      options : ["Iron Man","Shaktiman","The Batman","The Dark Knight"],
      correctAnswer : "The Dark Knight"
    },

    {
      id : 3, 
      questions : "Which Superhero follows all the quality of Brave Man ?",
      options : ["Iron Man","The Dark Knight","Captain America","Thor"],
      correctAnswer : "The Dark Knight"
    },

    {
      id : 4, 
      questions: "In terms of being rich who is most powerful man?",
      options : ["Bruce Wayne","Tony Stark","Rocky","Elon Musk"],
      correctAnswer : "Bruce Wayne"
    },

    {
      id : 5, 
      questions: "If got chance to be superhero , who will you become?",
      options : ["Thor","Captain America","Iron Man","The Batman"],
      correctAnswer : "The Batman"
    }

  ]

  const [ans,setAns] = React.useState({})
  
  const HandleOptionChange = (e) =>
 {const {name,value}=e.target
  setAns({
    
    ...ans,
    [name] : value
 })}
 console.log(ans)


  

  const [page,setPage]=React.useState(1)
    const HandleIncClick = ()=>
    { setPage(page+1) }
    
    
    
    const calculateScore=()=>
    {
        let score=0
        questions.forEach((fld)=>
        {
          if(ans[fld.id]==fld.correctAnswer)
          {score++}
        })
      return score
    }
      
    return(
        <>
        <div>
          {page==1 && (<div class="image">
          <div class="center" style={{backgroundColor:"rgb(45, 43, 43)",color:"white",border:"10px solid rgb(92, 10, 90)"}}>

        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label" style={{fontSize: "40px",fontWeight:"bold"}}>Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{fontSize:"25px",fontWeight: "bold"}}></input>
              <div id="emailHelp" class="form-text" style={{fontSize:"20px",fontWeight:"500",color:"red"}}>We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" style={{fontSize: "40px",fontWeight:"bold"}}>Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"  style={{fontSize:"25px",fontWeight: "bold"}}></input>
              <div id="passwordHelpBlock" class="form-text" style={{fontSize:"20px",fontWeight:"500",color:"red"}}>
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </div>
            </div>
            <br/>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{width:"20px",height:"20px"}}></input>
              &nbsp;
              <label class="form-check-label" for="exampleCheck1" style={{fontSize:" 23px"}}>I hereby submit all my details</label>
            </div>
            <br/>
            <button onClick={()=>(HandleIncClick())} type="submit" class="btn btn-primary" style={{marginLeft:"350px",fontSize:"25px",borderRadius:"20px"}}>Submit</button>
        </form>
    </div>
    </div>)}


    {page==2 && (
      <div>
        <h1>Quiz page</h1>
        <br/>
        {questions.map((fld)=>(
          <>
        <h2>
          {fld.questions}
          </h2>

          {fld.options.map((opt)=>
          (<div class="form-check">
          <input class="form-check-input" type="radio" name={fld.id} value={opt} onClick={(e)=>HandleOptionChange(e)}/>
          <label class="form-check-label" for="flexRadioDefault1" style={{fontSize:"25px"}}>
            {opt}
          </label>
          </div>
        ))}
           </> ))}
          
      

          
        <button onClick={()=>(HandleIncClick())} type="submit">Submit</button>
        </div>
    )}

    {page==3 && (
      <>
      <div>
        <div style={{fontWeight:"bold"}}> <h1>Your Score is : {calculateScore()}</h1></div>
        </div>
        </>
    )}
        </div>
    

   </> )
  }
export default Login;