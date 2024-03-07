import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginStyle from "../Components/LoginStyle.module.css";

function LoginForm() {
  return (
    <>
      <div className={LoginStyle.mainContainer}>
        <form className={LoginStyle.form}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{
              padding: "50px",
            }}
          >
            <div>
              <h1 className={LoginStyle.header}>Login</h1>
            </div>

            <div className={LoginStyle.input}>
              <TextField
                // required
                id="outlined-required"
                label="Username"
                defaultValue=""
              />
            </div>
            <div className={LoginStyle.input}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <div className={LoginStyle.input}>
            <Button
              type="submit"
              variant="contained">
              Login
                </Button>
                </div>
          </Box>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
