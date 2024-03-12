import { TextField } from "@mui/material"
import Background from "../Home/Background"
import { RegisterWrapper } from "./Register.styled"

const Register = () => {
  return (
    <RegisterWrapper>
        <Background />
        <div className="register-container">
          <div className="input-part">
            <TextField placeholder="Name" />
            <TextField placeholder="Surname" />
          </div>
        </div>
    </RegisterWrapper>
  )
}

export default Register