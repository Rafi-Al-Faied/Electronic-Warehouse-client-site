import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (


        <section  className='addProduct register '>
          <div className=' mx-auto register3'>
          <div className='register-form '>
                <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                <form onSubmit={handleRegister} className='register4'>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />

                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Be Stock Terms and Conditions</label>
                    <input
                        disabled={!agree}
                        className='w-50 mx-auto btn btn-primary mt-2'
                        type="submit"
                        value="Register" />
                </form>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
          </div>
        </section>




        // <section className='addProduct'>
        //     <div className='w-50 mx-auto'>

        //         <div class="container mt-4 addProduct-form">



        //             <div class="row">

        //                 <div class=" col-lg-6 col-md-12 col-sm-12 col-12 mb-4 mt-5">
        //                     <div class="card ripe-malinka-gradient form-white">
        //                         <div class="card-body">

        //                             <form className='d-flex flex-column' onSubmit={handleRegister}>
        //                                 <h2 class="text-center font-up font-bold py-4 white-text">Register</h2>
        //                                 <div class="md-form">
        //                                     <i class="fa fa-user prefix white-text"></i>
        //                                     <input type="text" id="orangeForm-name2" class="form-control" placeholder='Enter your name' name="Name" required />
        //                                     <label for="orangeForm-name2"></label>

        //                                 </div>
        //                                 <div class="md-form">
        //                                     <i class="fa fa-envelope prefix white-text"></i>
        //                                     <input type="email" id="orangeForm-email2" class="form-control" placeholder='Enter your Email' required />
        //                                     <label for="orangeForm-email2"></label>
        //                                 </div>

        //                                 <div class="md-form">
        //                                     <i class="fa fa-envelope prefix white-text"></i>
        //                                     <input id="orangeForm-email2" class="form-control" placeholder='Password' type='passowrd' required />
        //                                     <label for="orangeForm-email2"></label>
        //                                 </div>



        //                                 <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

        //                                 <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>


        //                                 <div class="text-center">
        //                                 <input
        //                                     disabled={!agree}
        //                                     className='w-50 mx-auto btn btn-primary mt-2'
        //                                     type="submit"
        //                                     value="Register" />
        //                                 </div>
        //                             </form>
        //                             <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        //                             <SocialLogin></SocialLogin>
        //                         </div>
        //                     </div>
        //                 </div>



        //             </div>


        //         </div>

        //     </div>





        // </section>



    );
};

export default Register;