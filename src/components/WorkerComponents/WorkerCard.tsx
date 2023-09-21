
import './Workercard.css';

type UserProps = {
    firstName:string
    lastName:string
    phoneNumber:string
    isAdmin:boolean
}

function WorkerCard ({firstName,lastName,phoneNumber,isAdmin}:UserProps){

    

   return(
      <div className='workercard-div'>
    <div className={`workercard-container ${isAdmin ? "workercard-admin" : ""}`}>
       <div className='workercard-fullname'><h4>{firstName} {lastName}</h4></div>
       <div className='workercard-phone' ><h4>{phoneNumber}</h4></div>
       <div className='linktocall'>
       <a href={`tel:${phoneNumber}`}>
       <div>place for icon</div>
       </a>
       </div>
    </div>
       <hr />
      </div>
   )
}
export default WorkerCard;