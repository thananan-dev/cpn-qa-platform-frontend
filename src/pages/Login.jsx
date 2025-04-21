import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import ValidateUtils from "../utils/ValidateUtils";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { onLogin, isLoading } = useAuth((state) => state);
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = ({ email, password }) => {
    onLogin(email, password, () => {
      navigate("/", {
        replace: true,
      });
    });
  };

  return (
    <Container sx={{ height: "100%", display: "grid", placeItems: "center" }}>
      <Card>
        <CardHeader title="Member Login" />
        <CardContent
          sx={{
            width: 400,
          }}
        >
          <Grid container spacing={2}>
            <Grid size={12}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  validate: {
                    isValidEmail: ValidateUtils.isEmail
                  }
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label="Email"
                    error={fieldState?.error}
                    helperText={fieldState?.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid size={12}>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    type="password"
                    label="Password"
                    error={fieldState?.error}
                    helperText={fieldState?.error?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit(onSubmit)}
                loading={isLoading}
              >
                Log in
              </Button>
            </Grid>

            <Divider sx={{ height: 2, width: "100%" }} />

            <Grid size={12}>
              {`Don't have an account?`}
              <Button variant="text" component={Link} to="/sign-up">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
