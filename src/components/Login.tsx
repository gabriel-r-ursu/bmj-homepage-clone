import LoginWrapper from "../styles/LoginStyles";

const Login: React.FC<{}> = () => {
    return (<LoginWrapper>
        <div className="menubar">
            <span>Our Company</span>
            <span>Subscribe</span>
            <span>My Account</span>
            <span>Login</span>
        </div>
    </LoginWrapper>)
}

export default Login;