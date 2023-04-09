import React from "react";
import Input from "../../../components/atoms/input";
import Button from "../../../components/atoms/button";
import yup from "../../../utils/validations/yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const SignupComponent:React.FC<{}>=({})=>{
    const { t, i18n } = useTranslation("translation", {
        keyPrefix: "pages.signUp",
      });

    const SignUpSchema = yup.object().shape({
        fullName: yup.string().required(i18n.t("errorMessages.required") || ""),
        email: yup
          .string()
          .email(i18n.t("errorMessages.validEmail") || "")
          .required(i18n.t("errorMessages.required") || ""),
        password: yup
          .string()
          .required(i18n.t("errorMessages.required") || "")
          // @ts-ignore
        //   .isSecurePassword(i18n.t("errorMessages.validPassword")),
    });

    const {
        handleSubmit,
        setError,
        register,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(SignUpSchema),
      });


      const onSubmit = async (data: any) => {

      };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            SignUp component
            <Input backgroundColor="#ffffff" textColor="#000000"
            placeholder="Username" isLabel={true} labelText={i18n.t("username") || "username required"}/>

<Input backgroundColor="#ffffff" textColor="#000000"
            placeholder="Password" isLabel={true} labelText="Password"/>


<Input backgroundColor="#ffffff" textColor="#000000"
            placeholder="First name" isLabel={true} labelText="First name"/>


<Input backgroundColor="#ffffff" textColor="#000000"
            placeholder="Last name" isLabel={true} labelText="Last name"/>

<Input backgroundColor="#ffffff" textColor="#000000"
            placeholder="Address" isLabel={true} labelText="Address"/>

<Button backgroundColor="#0000ff" textColor="#ffffff" label="Signup"/>


        </form>
    );
}


export default SignupComponent