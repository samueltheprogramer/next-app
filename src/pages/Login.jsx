import { LoginOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <Card sx={{ boxShadow: 20 }}>
            <CardMedia>
              <LoginOutlined />
            </CardMedia>

            <CardHeader title="Login here " />

            <CardContent>
              <Stack spacing={2}>
                <TextField
                  {...register("Email")}
                  type="email"
                  variant="outlined"
                  label="Email"
                  fullWidth
                  required
                />
                <TextField
                  {...register("Password")}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  label="Password"
                  fullWidth
                  required
                />
              </Stack>
            </CardContent>

            <Button
              sx={{ marginLeft: 26 }}
              variant="contained"
              size="small"
              type="submit"
            >
              Submit
            </Button>
          </Card>
          <Card elevation={1} ou>
            <Typography variant="subtitle1" sx={{ marginLeft: 8 }}>
              New to page?
              <span>
                <Link to="/signin">Sign in</Link>
              </span>
            </Typography>
          </Card>
        </Stack>
      </form>
    </>
  );
}

export default Login;
