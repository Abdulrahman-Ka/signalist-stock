"use client";
import CountrySelectField from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log({ data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name={"fullName"}
          label={"Full Name"}
          placeholder={"Amr Kallas"}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 2 }}
          register={register}
        />
        <InputField
          name={"email"}
          label={"Email"}
          placeholder={"contact@amr.com"}
          error={errors.email}
          validation={{
            required: "Email  is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Email address is required",
          }}
          register={register}
        />
        <CountrySelectField
          name={"country"}
          label={"Country"}
          control={control}
          error={errors.country}
        />
        <InputField
          name={"password"}
          label={"Password"}
          placeholder={"Enter a strong password"}
          type="password"
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
          register={register}
        />

        <SelectField
          name={"investmentGoals"}
          label={"Investment Goals"}
          placeholder={"select your investment goal"}
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
        />
        <SelectField
          name={"riskTolerance"}
          label={"Risk Tolerance"}
          placeholder={"select your risk level"}
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
        />
        <SelectField
          name={"preferredIndustry"}
          label={"Preferred Industry"}
          placeholder={"select your preferred industry"}
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating account" : "Start Your Investing Journey"}
        </Button>
        <FooterLink
          text="Already have an account?"
          linkText="Sign in"
          href="/sign-in"
        />
      </form>
    </>
  );
};
export default SignUp;
