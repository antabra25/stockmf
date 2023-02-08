import {useFormik} from "formik";
import Form from "../form/Form"
import {TextField, Stack} from "@mui/material";
import * as Yup from 'yup'
import FomButton from "./FomButton.jsx";

const LoginForm = () => {

    const initialValues = {email: '', password: ''}
    const validationSchema = Yup.object({
        email: Yup.string().email('Debe ingresar un email valido').required("Campo Correo Requerido"),
        password: Yup.string().min(8, "Contraseña debe tener un minimo de 8 caracteres").required("Campo Contraseña Requerido")
    })
    const onSubmit = async (values) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (

        <Stack direction="column" spacing={1} width={250}>
            <Form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                    <TextField id="email" name="email" value={formik.values.email} onChange={formik.handleChange}
                               onBlur={formik.handleBlur} error={formik.touched.email && Boolean(formik.errors.email)}
                               helperText={formik.touched.email && formik.errors.email} type="email"/>
                    <TextField id="password" name="password" value={formik.values.password}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur} error={formik.touched.password && Boolean(formik.errors.email)}
                               helperText={formik.touched.password && formik.errors.password} type="password"/>

                    <FomButton name="Iniciar Sesion" validate={formik.isValid}/>
                </Stack>
            </Form>
        </Stack>

    )
}

export default LoginForm;