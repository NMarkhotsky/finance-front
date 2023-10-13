import * as yup from "yup";

export const schema = yup
    .object({
        balance: yup.number().positive().required().min(0.01).test(
        "decimal",
        "Maximum of 2 decimal places",
        (value) => /^\d+(\.\d{1,2})?$/.test(value)
        ),
    })
    .required()
