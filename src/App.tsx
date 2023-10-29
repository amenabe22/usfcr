import React, { useState } from 'react'
import './App.css'
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import Nyc from "./assets/nyc.png"
import NycBlur from "./assets/nycblur.png"


import { CardElement, FormspreeProvider, useForm, ValidationError } from '@formspree/react';

const useOptions = () => {
  const options = React.useMemo(
    () => ({
      style: {
        base: {
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    []
  );

  return options;
};

function App() {
  const [state, handleSubmit] = useForm("maygvvrb");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)
  const nextStep = () => setStep(step + 1);

  const handleNext = (e: any) => {
    e.preventDefault()
    if (step == 2) {
      finalSubmit(e)
      return
    }
    nextStep()
  }

  function PaymentForm() {
    const [state, handleSubmit] = useForm('myyqoakz');
    const options = useOptions()

    console.log("payment state: ", state)
    if (state.succeeded) {
      setFinished(true)
    }

    return (
      <form onSubmit={handleSubmit} className='w-full mt-10 form-wrapper p-10 flex flex-col gap-6 max-w-3xl'>
        <div>
          <p className='payment-txt pb-3'>PAYMENT METHOD</p>
          <label htmlFor="email" className="input-label uppercase">email address</label>

          <input type="email" id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required name="email" />
        </div>
        <div className='flex flex-col'>
          <label className='pb-2'>Card details</label>
          <CardElement options={options} />
          <ValidationError
            field="paymentMethod"
            errors={state.errors}
          />
        </div>
        <button type="submit" className='cta-primary text-white' disabled={state.submitting}>
          {state.submitting ? 'Processing payment...' : 'SUBMIT REGISTRATION'}
        </button>
        <button type="button" disabled={state.submitting} className='cta-gray text-black'
          onClick={() => step == 2 ? setStep(1) : setStep(2)}>
          Back
        </button>

      </form>
    )
  }
  const finalSubmit = async (e: any) => {
    e.preventDefault();

    // Create a new FormData object and append the form data
    const form = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        form.append(key, (formData as any)[key]);
      }
    }
    // Send the form data to Formspree via a fetch request
    try {
      setLoading(true)
      const response = await fetch('https://formspree.io/f/maygvvrb', {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      });

      setLoading(false)
      if (response.ok) {
        // Handle a successful submission, e.g., show a success message
        console.log('Form submitted successfully!');
        setStep(3)
      } else {
        // Handle an error in submission, e.g., display an error message
        console.error('Form submission failed.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }
  };
  const stripeInputChanged = (e: any) => {
    console.log("DATA :> ", e)
  }
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    businessName: '',
    businessAddr: '',
    aptSuite: '',
    reason: '',
    city: '',
    country: '',
    state: '',
    zipCode: ''
  });


  return (
    <>
      <Navbar />
      {state.succeeded ? (
        <>
          <div className=' text-center py-20 relative flex mt-1 items-center justify-center' style={{ background: "#F9FBFE" }}>
            <p className='text-3xl'>Thanks for applying!</p>
          </div>

        </>
      ) : finished ? (<>
        <div className='w-full'>
          <img className='absolute mt-16 right-0 z-0' src={NycBlur} alt="" style={{ zIndex: -999 }} />
          <div className='top-0 flex justify-center main-wrapper pt-32 md:pt-60 mt-1 items-center flex-col pb-56'>

            <div className='flex flex-col items-center justify-center gap-5'>
              <div>
                <p className='title-1 font-semibold'>Your Submission Was Registered! </p>
                <p className='sub-sm pt-4 text-center'>a Case Manager will be assigned and begin working on your registration.</p>
              </div>
              <svg width="143" height="143" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M142.683 71.7236C142.683 110.936 110.895 142.724 71.6826 142.724C32.4704 142.724 0.682617 110.936 0.682617 71.7236C0.682617 32.5114 32.4704 0.723572 71.6826 0.723572C110.895 0.723572 142.683 32.5114 142.683 71.7236ZM8.35121 71.7236C8.35121 106.701 36.7056 135.055 71.6826 135.055C106.66 135.055 135.014 106.701 135.014 71.7236C135.014 36.7466 106.66 8.39217 71.6826 8.39217C36.7056 8.39217 8.35121 36.7466 8.35121 71.7236Z" fill="#113559" />
                <path d="M105.746 48.2792L61.7304 92.2951L41.7231 72.2879" stroke="#113559" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a className='flex items-center gap-6 mt-3' href='/'>
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_1514)">
                    <path d="M9.36703 17.6436L2.84703 11.1236C2.07703 10.3536 2.07703 9.09359 2.84703 8.32359L9.36703 1.80359" stroke="#373632" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1514">
                      <rect width="10" height="18" fill="white" transform="translate(0.5 0.723572)" />
                    </clipPath>
                  </defs>
                </svg>

                <p>Return to Home</p>
              </a>
            </div>
          </div>
        </div>
      </>) : (
        <div className='w-full h-auto'>
          <img className='absolute -mb-50 right-0 z-0 mt-16' src={Nyc} alt="" style={{ zIndex: -999 }} />
          <div className='top-0 flex justify-center  main-wrapper pt-4 md:pt-32 mt-1 items-center flex-col pb-56'>

            <div className='flex flex-col items-center'>
              <p className='title-1 font-semibold flex flex-col md:flex-row'>SAM Registration Made Easy</p>
              <p className='sub-sm pt-4 text-center px-2'>Streamline Your Federal Registration and Contracting Process with USFCR</p>
            </div>
            {step === 3 ? (<>
              <FormspreeProvider stripePK="pk_test_51O6452Bh7vZ8JDPWYfcVFNMnFBj3lbpSMrGRUhielQ9DK3ktfz5ucwvlzio214Re04KfRG3SygJ31fbqZOPjV8q600v1b6wwXF">
                <PaymentForm />
              </FormspreeProvider>
            </>) : (

              <form onSubmit={handleNext} className='w-full max-w-7xl mt-10 form-wrapper p-4 md:p-10 flex flex-col gap-6'>
                {step == 1 ? (

                  <>
                    <div className='flex md:flex-row flex-col items-center gap-10 bg-white w-full'>
                      <div className='w-full'>
                        <div className="">
                          <label htmlFor="firstName" className="input-label">First Name</label>
                          <input type="text" value={formData.firstName} onChange={handleInputChange}
                            id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required name="firstName" />
                          <ValidationError
                            prefix="First Name"
                            field="firstName"
                            errors={state.errors}
                          />
                        </div>
                      </div>
                      <div className='w-full'>
                        <label htmlFor="lastName" className="input-label">Last Name</label>
                        <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          required name="lastName" />
                        <ValidationError
                          prefix="Last Name"
                          field="lastName"
                          errors={state.errors}
                        />
                      </div>

                    </div>

                    <div className='w-full'>
                      <label htmlFor="phone" className="input-label">PHONE</label>
                      <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="" name="phone" required />
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                      />
                    </div>

                    <div className='w-full'>
                      <label htmlFor="businessName" className="input-label">BUSINESS NAME (ENTITY)</label>
                      <input type="text" id="businessName" value={formData.businessName} onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required name="businessName" />
                      <ValidationError
                        prefix="Business Name"
                        field="businessName"
                        errors={state.errors}
                      />
                    </div>


                    <div className='w-full'>
                      <label htmlFor="email" className="input-label uppercase">email address</label>
                      <input type="email" id="email" value={formData.email} onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required name="email" />
                      <ValidationError
                        prefix="Email Address"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    {/* <div className='w-full'>
                      <label htmlFor="text" className="input-label uppercase">WHY ARE YOU STARTING A NEW SAM REGISTRATION?</label><br />
                      <select name="reason" id="reason" value={formData.reason} onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 outline-none
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4">
                        <option disabled>Select Options</option>
                        <option value="op1">Option 1</option>
                        <option value="op1">Option 2</option>
                        <option value="op1">Option 3</option>
                        <option value="op1">Option 4</option>
                      </select>
                      <ValidationError
                        prefix="Register Reason"
                        field="reason"
                        errors={state.errors}
                      />
                    </div> */}
                  </>)
                  : step == 2 ? (
                    <div className='flex flex-col gap-4'>
                      <div className='w-full'>
                        <label htmlFor="businessAddr" className="input-label">BUSINESS STREET ADDRESS *</label>
                        <input type="text" id="businessAddr" value={formData.businessAddr} onChange={handleInputChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          required name="businessAddr" />
                        <ValidationError
                          prefix="Business Address"
                          field="businessAddr"
                          errors={state.errors}
                        />
                      </div>
                      <div className='w-full'>
                        <label htmlFor="aptSuite" className="input-label">APT, SUITE, ETC. *</label>
                        <input type="text" id="aptSuite" value={formData.aptSuite} onChange={handleInputChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          required name="aptSuite" />
                        <ValidationError
                          prefix="Apt, SUITE, ETC. "
                          field="aptSuite"
                          errors={state.errors}
                        />
                      </div>
                      {/* City & Country */}
                      <div className='flex flex-col md:flex-row items-center gap-10 bg-white w-full'>
                        <div className='w-full'>
                          <div className="">
                            <label htmlFor="city" className="input-label">City</label>
                            <input type="text" value={formData.city} onChange={handleInputChange}
                              id="city" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              required name="city" />
                            <ValidationError
                              prefix="City"
                              field="city"
                              errors={state.errors}
                            />
                          </div>
                        </div>
                        <div className='w-full'>
                          <label htmlFor="country" className="input-label">Country</label>
                          <input type="text" id="country" value={formData.country} onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required name="country" />
                          <ValidationError
                            prefix="Country"
                            field="country"
                            errors={state.errors}
                          />
                        </div>

                      </div>
                      {/* State & Zip Code */}
                      <div className='flex flex-col md:flex-row items-center gap-10 bg-white w-full'>
                        <div className='w-full'>
                          <div className="">
                            <label htmlFor="state" className="input-label">STATE</label>
                            <input type="text" value={formData.state} onChange={handleInputChange}
                              id="state" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              required name="state" />
                            <ValidationError
                              prefix="State"
                              field="state"
                              errors={state.errors}
                            />
                          </div>
                        </div>
                        <div className='w-full'>
                          <label htmlFor="zipCode" className="input-label">ZIP CODE</label>
                          <input type="text" id="zipCode" value={formData.zipCode} onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required name="zipCode" />
                          <ValidationError
                            prefix="Zip Code"
                            field="zipCode"
                            errors={state.errors}
                          />
                        </div>

                      </div>
                    </div>
                  ) :
                    <div>

                    </div>
                }

                <div className='flex flex-col md:flex-row justify-end gap-2'>
                  {
                    step != 1 ? (<button type="button" disabled={state.submitting} className='cta-primary text-white'
                      onClick={() => step == 2 ? setStep(1) : setStep(2)}>
                      PREVIOUS
                    </button>
                    ) : null
                  }
                  <button type="submit" disabled={state.submitting && loading} className='cta-primary text-white'
                  >
                    {loading ? (<p>Loading...</p>) : (<p>CONTINUE</p>)}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div >
      )
      }
      <Footer />
    </>

  );
}

export default App
