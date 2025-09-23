import { useForm } from "react-hook-form";
import Title from "../../ui/Title";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "./useSignUp";
import Spinner from "../../ui/Spinner";

function SignupFormB({ formData }) {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const {signup, isPending: isLoading} = useSignup()
  const { register, handleSubmit } = useForm();
  // const minCourse = 0;

  function handleChange(event) {
    const course = event.target.value;
    if (event.target.checked) {
      setSelectedCourse([...selectedCourse, course]);
    } else {
      setSelectedCourse(selectedCourse.filter((item) => item !== course));
    }
  }
  function onSubmit(data) {
    const { email, password, firstname, lastname, username } = formData;
    const newStudent = {
      ...data,
      email,
      firstname,
      lastname,
      username,
      courses: selectedCourse,
    };
    signup({ email, password, newStudent });
  }

  if(isLoading) return <Spinner />
  
  return (
    <div class="mt-5 mx-auto px-2 w-100 flex flex-col">
      <Title>Sign Up</Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="flex flex-col w-full h-full gap-4 mt-6"
      >
        <div class="flex flex-col">
          <label htmlFor="department">Department</label>
          <select
            class="w-full outline-0 bg-[#fafafa] border focus:border-b-purple-deep border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2"
            id="department"
            {...register("department")}
          >
            {/* <option value="">Select Depatment</option> */}
            <optgroup label="COLAMRUD">
              <option value="AEFM">AEFM</option>
              <option value="AERD">AERD</option>
              <option value="AGAD">AGAD</option>
            </optgroup>
            <optgroup label="COLBIOS">
              <option value="BCH">BCH</option>
              <option value="MCB">MCB</option>
              <option value="CHM">CHM</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label htmlFor="lastName">Level</label>
          <select
            class="w-full outline-0 bg-[#fafafa] border focus:border-b-purple-deep border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2"
            id="level"
            {...register("level")}
          >
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
          </select>
        </div>
        <div>
          <p>Add Course</p>
          <div class="py-6 px-6 bg-[#fafafa] border border-[#f1f1f1] rounded-lg flex flex-wrap items-center justify-between space-x-1 gap-6">
            <input
              class="input_checked input_checked hidden"
              type="checkbox"
              id="chm101"
              name="chm101"
              value="CHM 101"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="chm101"
            >
              CHM 101
            </label>
            <input
              class="input_checked hidden"
              type="checkbox"
              id="chm105"
              name="chm105"
              value="CHM 105"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="chm105"
            >
              CHM 105
            </label>
            <input
              class="input_checked input_checked hidden"
              type="checkbox"
              id="phs105"
              name="phs"
              value="PHS 105"
              onChange={handleChange}
            />
            <label
              class="input_label input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="phs105"
            >
              PHS 105
            </label>
            <input
              class="input_checked hidden"
              type="checkbox"
              id="mts105"
              name="mts105"
              value="MTS 105"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="mts105"
            >
              MTS 105
            </label>
            <input
              class="input_checked hidden"
              type="checkbox"
              id="mts103"
              name="mts103"
              value="MTS 103"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="mts103"
            >
              MTS 103
            </label>
            <input
              class="input_checked hidden"
              type="checkbox"
              id="chm106"
              name="chm106"
              value="CHM 106"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="chm106"
            >
              CHM 106
            </label>
            <input
              class="input_checked hidden"
              type="checkbox"
              id="bio101"
              name="bio101"
              value="BIO 101"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="bio101"
            >
              BIO 101
            </label>
            <input
              class="input_checked hidden"
              type="checkbox"
              id="chm102"
              name="chm102"
              value="CHM 102"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="chm102"
            >
              CHM 102
            </label>
            <input
              class="input_checked hidden"
              type="checkbox"
              id="mts101"
              name="mts101"
              value="MTS 101"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="mts101"
            >
              MTS 101
            </label>
            <input
              class="input_checked hidden"
              type="checkbox"
              id="phs101"
              name="phs101"
              value="PHS 101"
              onChange={handleChange}
            />
            <label
              class="input_label py-4 px-4 rounded-2xl border border-[#f1f1f1] bg-white text-xs font-600 text-center"
              htmlFor="phs101"
            >
              PHS 101
            </label>
          </div>
          <div class="my-5 text-center">
            <p class="text-sm text-[#0f0f0f50] font-600">
              You can change this course selection later on.
            </p>
          </div>
        </div>

        <div class="text-center my-3">
          <button
            class="py-3 px-8 text-xs font-700 bg-[#f1f1f1] rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading }
          >
            Submit
          </button>
        </div>
        <div class="text-center">
          <p class="text-xs font-500">
            Have an account ?{" "}
            <span class="text-purple-deep">
              <Link to="/signin">Log in</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupFormB;
