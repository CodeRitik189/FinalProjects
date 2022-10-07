import React, {useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import alertContext from "../context/alertContext";
const Signup = () => {
  const context = useContext(alertContext)
  const {showAlert} = context;
  const [credentials, setCredentials] = useState({name:"", email:"", password:"", password2:""})
    const navigate = useNavigate()
  const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    const onSubmit = async(e) =>{
      e.preventDefault();
      const response = await fetch("https://timely-kelpie-af3e33.netlify.app/api/auth/createuser",
      {method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, password2:credentials.password2})
      }
    );
    const json = await response.json();
  //   console.log(json);
    if(json.success)
    {
      localStorage.setItem('token', json.authtoken)
      navigate("/")
      showAlert("green","Account created successfully!")
    }
    else{
      showAlert("purple","Some error occured")
    }
  }
  return (
    <>
    <div className="flex ml-96 mt-20  w-96">
     <div className="  container h-screen ">
      <form
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              onSubmit={onSubmit}
            >
              <h3 className="text-xl font-medium text-purple-900 dark:text-white border-b-4 border-purple-800 p-2">
                SignUp to Travel Advisor
              </h3>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-purple-900 dark:text-purple-300"
                >
                  Enter your full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={onChange}
                  className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                  placeholder="Alex Hales"
                  required
                  autoComplete="on"
                />
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-purple-900 dark:text-purple-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onChange}
                  className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                  autoComplete="on"
                />
              </div>
              <div>
                <label
                  htmlFor="password1"
                  className="block mb-2 text-sm font-medium text-purple-900 dark:text-purple-300"
                >
                  {" "}
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={onChange}
                  placeholder="••••••••"
                  className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                  required
                  minLength={5}
                  autoComplete="on"
                />
                <label
                  htmlFor="password1"
                  className="block mb-2 text-sm font-medium text-purple-900 dark:text-purple-300"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  onChange={onChange}
                  placeholder="••••••••"
                  className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                  required
                  minLength={5}
                  autoComplete="on"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
               Create new account
              </button>
            </form>
            </div>
            </div>
    </>
  );
};

export default Signup;
