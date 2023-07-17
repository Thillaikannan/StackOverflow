
import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const findOtp = (otpData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.findotp(otpData)
        dispatch({ type: 'OTP', data});
      //  dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Otp')) ))
        navigate('/AskQuestion')
    } catch (error) {
        console.log(error)
    }
}
