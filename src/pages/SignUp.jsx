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
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const { onSignup, isLoading } = useAuth((state) => state);
  const { control, watch, handleSubmit } = useForm({
    defaultValues,
  });

  const watchPassword = watch("password");

  const onSubmit = ({ firstName, lastName, username, email, password }) => {
    onSignup(firstName, lastName, username, email, password, () => {
      navigate("/", {
        replace: true,
      });
    });
  };

  return (
    <Container sx={{ height: "100%", display: "grid", placeItems: "center" }}>
      <Card>
        <CardHeader title="Create an account" />
        <CardContent
          sx={{
            width: 400,
          }}
        >
          <Grid container spacing={2}>
            <Grid size={12}>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: "First name is required",
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label="First name"
                    error={fieldState?.error}
                    helperText={fieldState?.error?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: "Last name is required",
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label="Last name"
                    error={fieldState?.error}
                    helperText={fieldState?.error?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="username"
                control={control}
                rules={{
                  required: "Username is required",
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label="Username"
                    error={fieldState?.error}
                    helperText={fieldState?.error?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  validate: {
                    isEmail: ValidateUtils.isEmail,
                  },
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
                  min: 4,
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
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm password is required",
                  validate: {
                    matchPassword: (value) => {
                      return value !== watchPassword
                        ? "Confirm password not match"
                        : undefined;
                    },
                  },
                  deps: "password",
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    type="password"
                    label="Confirm Password"
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
                Sign Up
              </Button>
            </Grid>

            <Divider sx={{ height: 2, width: "100%" }} />

            <Grid size={12}>
              <Button variant="outlined" fullWidth component={Link} to="/login">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUp;
