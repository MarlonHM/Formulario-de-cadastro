import TextField from "@mui/material/TextField";
import { ContainerForm } from "./styles";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches("^[a-zA-Z ]+$", "Seu nome deve conter apenas letras"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches("^(?=.*[A-Z])", "A sua senha deve conter 1 letra Maiuscula")
      .matches("^(?=.*[a-z])", "A sua senha deve conter 1 letra minuscula")
      .matches("^(?=.*[0-9])", "A sua senha deve conter 1 numero")
      .matches(
        "^(?=.*[!#@$%&])",
        "A sua senha deve conter um caractere especial"
      )
      .matches("^.{8,}$", "A sua senha deve conter oito caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    history.push(`/home/${data.name}`);
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-basic"
          label="Nome"
          variant="standard"
          {...register("name")}
          helperText={errors.name?.message}
          error={errors.name && true}
        />

        <TextField
          id="standard-basic1"
          label="Email"
          type="email"
          variant="standard"
          {...register("email")}
          helperText={errors.email?.message}
          error={errors.email && true}
        />
        <TextField
          id="standard-basic2"
          type="password"
          label="Senha"
          variant="standard"
          {...register("password")}
          helperText={errors.password?.message}
          error={errors.password && true}
        />
        <TextField
          id="standard-basic3"
          type="password"
          label="Confirmar Senha"
          variant="standard"
          {...register("confirmPassword")}
          helperText={errors.confirmPassword?.message}
          error={errors.confirmPassword && true}
        />
        <Button type="submit" variant="outlined">
          Cadastrar
        </Button>
      </form>
    </ContainerForm>
  );
};

export default Form;
