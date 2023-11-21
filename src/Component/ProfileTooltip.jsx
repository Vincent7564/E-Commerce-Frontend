import "./tooltip.css";
import { useSelector } from "react-redux";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
const ProfileTooltip = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const logout = async () =>{
    try{
      await axios.post('/logout');
      console.log('Logout Success');
      setTimeout(function() {
        navigate('/')}
        ,1000)
    }catch(error){
      console.error(error)
    }
  }
  return (
    
    <>
      <div className="p-5 text-vnv-green-dark bg-vnv-light border-vnv-light-grey border-2"
      style={{ borderRadius: "5px"}}>
        {/* {text} */}
        <div className="text-vnv-black"><b>{user.username}</b></div>
        <div className="text-vnv-dark-grey">View Profile</div>

        <div>
            <button
            className="border-2 my-2 mx-5 p-3 w-40% rounded border-vnv-green-primary text-vnv-green-primary hover:text-vnv-green-dark hover:bg-vnv-green-dark py-2 px-5"
            >
            setting
            </button>

            <button
            className="border-2 my-2 mx-5 p-3 w-40% rounded border-vnv-green-primary text-vnv-green-primary hover:text-vnv-green-dark hover:bg-vnv-green-dark py-2 px-5"
            onClick={logout}
            >
            logout
            </button>
        </div>

        <div>
            <button
            className="border-2 my-2 mx-5 p-3 rounded bg-vnv-green-primary text-vnv-green-dark hover:text-vnv-light hover:bg-vnv-green-dark py-2 px-5"
            >
            View Transaction
            </button>
        </div>
      </div>
    </>
  );
};

export default ProfileTooltip;
