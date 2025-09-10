// import SignupForm from "../features/authentication/SignupForm"
import { useState } from "react"
import SignupForm from "../features/authentication/SignupForm"
import SignupFormB from "../features/authentication/SignupFormB"
import Navbar from "../ui/Navbar"

function Signup() {
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({})
    
    return (
      <div>
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
      </div>
    );
}

export default Signup
