import * as yup from "yup";

export const transactionSchema = yup
    .object({
        description: yup.string().required('Description is required'),
        category: yup.object({
            value: yup.string().required(),
            label: yup.string().required()
        }).required('Category is required'),
        sum: yup.number().positive('Sum must be a positive number').required('Sum is required').min(0.01).test(
        "decimal",
        "Maximum of 2 decimal places",
        (value) => /^\d+(\.\d{1,2})?$/.test(value)
        ),
    })
    .required()



export const balanceSchema = yup
    .object({
        balance: yup.number().positive().required().min(0.01).test(
        "decimal",
        "Maximum of 2 decimal places",
        (value) => /^\d+(\.\d{1,2})?$/.test(value)
        ),
    })
    .required()