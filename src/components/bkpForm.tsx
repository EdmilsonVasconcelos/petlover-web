import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
// import FlexBetween from "../components/FlexBetween";

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
};

const initialValuesLogin = {
    email: "",
    password: "",
};

const Form = () => {
    const [pageType, setPageType] = useState("login");
    const { palette }: any = useTheme();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const register = async (values: any, onSubmitProps: any) => {
        // this allows us to send form info with image
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);

        const savedUserResponse = await fetch(
            "http://localhost:3001/auth/register",
            {
                method: "POST",
                body: formData,
            }
        );
        const savedUser = await savedUserResponse.json();
        // onSubmitProps.resetForm();

        if (savedUser) {
            setPageType("login");
        }
    };

    const login = async (values: any, onSubmitProps: any) => {
        const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });
        const loggedIn = await loggedInResponse.json();
        // onSubmitProps.resetForm();
        if (loggedIn) {
            //   dispatch(
            //     setLogin({
            //       user: loggedIn.user,
            //       token: loggedIn.token,
            //     })
            //   );
            navigate("/home");
        }
    };

    const handleFormSubmit = async (values: any, onSubmitProps: any) => {
        // if (isLogin) await login(values, onSubmitProps);
        // if (isRegister) await register(values, onSubmitProps);
    };

    return (
        <form>
            <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
            >
                {isRegister && (
                    <>
                        <TextField
                            label="First Name"
                            onBlur={() => console.log("Fui chamado")}
                            onChange={() => console.log("Fui chamado")}
                            // value={values.firstName}
                            name="firstName"
                            error={
                                // Boolean(touched.firstName) && Boolean(errors.firstName)
                                false
                            }
                            // helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            label="Last Name"
                            onBlur={() => console.log("Fui chamado")}
                            onChange={() => console.log("Fui chamado")}
                            // value={values.lastName}
                            name="lastName"
                            // error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                            // helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            label="Location"
                            onBlur={() => console.log("Fui chamado")}
                            onChange={() => console.log("Fui chamado")}
                            // value={values.location}
                            name="location"
                            // error={Boolean(touched.location) && Boolean(errors.location)}
                            // helperText={touched.location && errors.location}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            label="Occupation"
                            onBlur={() => console.log("Fui chamado")}
                            onChange={() => console.log("Fui chamado")}
                            // value={values.occupation}
                            name="occupation"
                            error={
                                // Boolean(touched.occupation) && Boolean(errors.occupation)
                                false
                            }
                            // helperText={touched.occupation && errors.occupation}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <Box
                            gridColumn="span 4"
                            border={`1px solid ${palette.neutral.medium}`}
                            borderRadius="5px"
                            p="1rem"
                        >
                            <Dropzone
                                accept={{ "image/*": [".jpeg", ".png"] }}
                                multiple={false}
                                onDrop={(acceptedFiles) => () => console.log("Fui chamado")}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <Box
                                        {...getRootProps()}
                                        border={`2px dashed ${palette.primary.main}`}
                                        p="1rem"
                                        sx={{ "&:hover": { cursor: "pointer" } }}
                                    >
                                        <input {...getInputProps()} />
                                        {/* {!values.picture ? (
                          <p>Add Picture Here</p>
                        ) : (
                          <FlexBetween>
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                          </FlexBetween>
                        )} */}
                                    </Box>
                                )}
                            </Dropzone>
                        </Box>
                    </>
                )}

                <TextField
                    label="Email"
                    onBlur={() => console.log("Fui chamado")}
                    onChange={() => console.log("Fui chamado")}
                    // value={values.email}
                    name="email"
                    // error={Boolean(touched.email) && Boolean(errors.email)}
                    // helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    label="Password"
                    type="password"
                    onBlur={() => console.log("Fui chamado")}
                    onChange={() => console.log("Fui chamado")}
                    // value={values.password}
                    name="password"
                    // error={Boolean(touched.password) && Boolean(errors.password)}
                    // helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 4" }}
                />
            </Box>

            <Box>
                <Button
                    fullWidth
                    type="submit"
                    sx={{
                        m: "2rem 0",
                        p: "1rem",
                        backgroundColor: palette.primary.main,
                        color: palette.background.alt,
                        "&:hover": { color: palette.primary.main },
                    }}
                >
                    {isLogin ? "LOGIN" : "REGISTER"}
                </Button>
                {
                    <Typography
                        onClick={() => setPageType(isLogin ? "register" : "login")}
                        sx={{
                            textDecoration: "underline",
                            color: palette.primary.main,
                            "&:hover": {
                                cursor: "pointer",
                                color: palette.primary.light,
                            },
                        }}
                    >
                        {isLogin
                            ? "Don't have an account? Sign Up here."
                            : "Already have an account? Login here."}
                    </Typography>
                }
            </Box>
        </form>
    );
};

export default Form;