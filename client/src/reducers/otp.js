const otpReducer = (state= { data:null}, action) => {
    switch (action.type) {
        case 'OTP':
            localStorage.setItem('OTP', JSON.stringify({ ...action?.data}))

            return { ...state, data: action?.data }
            default:
                return state;
    }
}
export default otpReducer