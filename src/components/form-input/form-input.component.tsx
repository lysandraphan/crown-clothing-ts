import { FC, InputHTMLAttributes } from "react";

// styles
import { FormInputLabel, Input, Group } from "./form-input.styles";

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormInput({ label, ...inputProps }: FormInputProps) {
  return (
    <Group>
      <Input {...inputProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            inputProps.value &&
              typeof inputProps.value === "string" &&
              inputProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}
