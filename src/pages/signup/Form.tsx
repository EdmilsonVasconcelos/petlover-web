import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { BASE_API } from "../../utils/api";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmationPassword: string;
}

const initialValuesRegister: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmationPassword: "",
};

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O campo nome do tutor é obrigatório")
    .min(1, "Este campo deve ter no mínimo 1 caractere")
    .max(20, "Este campo deve ter no máximo 20 caracteres"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O campo e-mail é obrigatório"),
  password: yup
    .string()
    .required("O campo senha do tutor é obrigatório")
    .min(6, "O campo deve ter no mínimo 6 caracteres")
    .max(100, "O campo deve ter no máximo 20 caracteres"),
  confirmationPassword: yup
    .string()
    .required("O campo confirmação de senha é obrigatório")
    .min(6, "O campo deve ter no mínimo 6 caracteres")
    .max(100, "O campo deve ter no máximo 20 caracteres"),
});

const Form = () => {
  const { palette }: any = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (
    values: FormValues,
    onSubmitProps: FormikHelpers<FormValues>
  ) => {
    const { password, confirmationPassword } = values;

    if (password !== confirmationPassword) {
      onSubmitProps.setErrors({
        confirmationPassword: "A confirmação de senha não confere com a senha",
      });
      return;
    }
    try {
      const createdResponse = await fetch(`${BASE_API}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });

      if (createdResponse.status === 400) {
        const { message } = await createdResponse.json();
        onSubmitProps.setErrors({ email: message });
        return;
      }

      if (!createdResponse.ok) {
        throw new Error("Erro na requisição");
      }

      onSubmitProps.resetForm();
    } catch (error) {
      console.log("Erro ao criar o usuário: ", error);
    }
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister as any}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
      }: any) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <>
              <TextField
                label="Nome do tutor"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={touched.name && errors.name && errors.name.length > 0}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                type="email"
                label="E-mail do tutor"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
            </>

            <TextField
              type="password"
              label="Senha"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Confirmação de senha"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirmationPassword}
              name="confirmationPassword"
              error={
                Boolean(touched.confirmationPassword) &&
                Boolean(errors.confirmationPassword)
              }
              helperText={
                touched.confirmationPassword && errors.confirmationPassword
              }
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
              Criar conta
            </Button>
            {
              <Typography
                onClick={() => console.log("Estou sendo chamado")}
                sx={{
                  textDecoration: "underline",
                  color: palette.primary.main,
                  "&:hover": {
                    cursor: "pointer",
                    color: palette.primary.light,
                  },
                }}
              >
                <Link to="/">Já tem uma conta? Faça o Login</Link>
              </Typography>
            }
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
