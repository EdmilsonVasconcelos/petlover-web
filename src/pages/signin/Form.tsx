import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { BASE_API } from "../../utils/api";
import { jwtDecode } from "jwt-decode";
import { useLoggedUser } from "../../hooks/useLoggedUser";

interface FormProps {
  updateToken: (token: string) => void;
}

interface FormValues {
  email: string;
  password: string;
}

const initialValuesForm: FormValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O campo e-mail é obrigatório"),
  password: yup
    .string()
    .required("O campo senha do tutor é obrigatório")
    .min(6, "O campo deve ter no mínimo 6 caracteres")
    .max(100, "O campo deve ter no máximo 20 caracteres"),
});

const Form = ({ updateToken }: FormProps) => {
  const { palette }: any = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { setLoggedUser } = useLoggedUser();
  const navigate = useNavigate();

  const handleFormSubmit = async (
    values: FormValues,
    onSubmitProps: FormikHelpers<FormValues>
  ) => {
    try {
      const loginResponse = await fetch(`${BASE_API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (loginResponse.status === 400) {
        const { message } = await loginResponse.json();
        onSubmitProps.setErrors({ email: message });
        return;
      }

      if (!loginResponse.ok) {
        throw new Error("Erro na requisição");
      }

      const { access_token } = await loginResponse.json();
      updateToken(`Bearer ${access_token}`);
      setLoggedUser(jwtDecode(access_token));
      navigate("/list-pets");
    } catch (error) {
      console.log("Erro ao autenticar", error);
    }
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesForm as any}
      validationSchema={schema}
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
                sx={{
                  textDecoration: "underline",
                  color: palette.primary.main,
                  "&:hover": {
                    cursor: "pointer",
                    color: palette.primary.light,
                  },
                }}
              >
                <Link to="/signup">Não tem uma conta? Cadastre-se aqui :D</Link>
              </Typography>
            }
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
