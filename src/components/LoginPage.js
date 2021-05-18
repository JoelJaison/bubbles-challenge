const LoginPage = ({ onSubmit }) => {
    return (
        <div className='login'>
            <form onSubmit={onSubmit}>
                <h1>Enter Credentials</h1>
                <div className='label'>
                    <label>Username:</label>
                    <input type='text' placeholder='Enter Username'
                    className='input' />
                </div>
                <div className='label'>
                    <label>Password:</label>
                    <input type='password' placeholder='Enter Password'
                    className='input' />
                </div>
                <input type='submit' className='btn' value='Sign In' />
            </form>
        </div>
    )
}

export default LoginPage;