import { Link } from "@remix-run/react"
import logo from "../images/Anxend Logo.svg"
import bee from "../images/Buzzbee_Headset_and_Clipboard 1.png"
import * as edgedb from "edgedb"
import type { MetaFunction } from "@remix-run/node"



export const meta: MetaFunction = () => [{ title: "School Project" }]



export default function Index() {
  return (
    <div className="min-h-screen bg-anxpurple-300 py-6">
      <div className="container">
        <img className="h-5 w-auto" src={logo} alt="Anxend logo" />
      </div>

      <div className="flex lg:h-screen lg:items-center">
        <div className="container flex flex-col lg:flex-row">
          <div>
            <h1 className="mt-10 font-montserrat text-2xl text-white drop-shadow-xl">
               Anxend Software Engineer Interview
            </h1>
            
            
            <p className="mt-8 font-montserrat text-1xl text-black ">
            <form>
      <label>Enter School Name:
      <div style={{ marginLeft: '1px',borderRadius: '150px' }}>
        <input type="text" />
        </div>
      </label>
    </form> 
    </p>
     
    
     
    <h1 className="mt-10 font-montserrat text-1xl text-white drop-shadow-xl">
               School Address
            </h1>

    <p className="mt-8 font-montserrat text-1xl text-black ">
            <form>
      <label>Country:
      <div style={{ marginLeft: '1px' }}>
        <input type="text" />
        </div>
      </label>
    </form> 
    </p>

    <p className="mt-8 font-montserrat text-1xl text-black ">
            <form>
      <label>City:
      <div style={{ marginLeft: '1px' }}>
        <input type="text" />
        </div>
      </label>
    </form> 
    </p>

    <p className="mt-8 font-montserrat text-1xl text-black ">
            <form>
      <label>Region:
      <div style={{ marginLeft: '1px' }}>
        <input type="text" />
        </div>
      </label>
    </form> 
    </p>

    <p className="mt-8 font-montserrat text-1xl text-black ">
            <form>
      <label>Postal Code:
      <div style={{ marginLeft: '1px' }}>
        <input type="Int32" />
        </div>
      </label>
    </form> 
    </p>

    <p className="mt-8 font-montserrat text-1xl text-black ">
            <form>
      <label>Street Name:
      <div style={{ marginLeft: '1px' }}>
        <input type="text" />
        </div>
      </label>
    </form> 
    </p>
    <Link
              className="mt-8 inline-block rounded-full bg-anxpurple-700 px-16 py-4 font-montserrat text-white hover:bg-anxwhite-300 hover:text-anxgreen-300 hover:shadow-xl"
              to="/"
            >
              Submit
            </Link>
          </div>
          
    
          <div className="h-1/3">
            <div className="h-1/3">
              <img className="lg:-mt-28 lg:block" src={bee} alt="Anxend logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

