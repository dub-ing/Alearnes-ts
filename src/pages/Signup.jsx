// import SignupForm from "../features/authentication/SignupForm"
import { useState } from "react"
import SignupForm from "../features/authentication/SignupForm"
import SignupFormB from "../features/authentication/SignupFormB"
import Navbar from "../ui/Navbar"
import Copyright from "../ui/Copyright"

function Signup() {
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({})
    
    return (
      <div class='w-full h-screen flex flex-col justify-between'>
        <Navbar />
        {showForm ? (
          <SignupFormB formData={formData} setFormData={setFormData} />
        ) : (
          <SignupForm
            formData={formData}
            setFormData={setFormData}
            setShowForm={setShowForm}
          />
        )}
        {/* <SignupForm /> */}
        <Copyright />
      </div>
    );
}

export default Signup
