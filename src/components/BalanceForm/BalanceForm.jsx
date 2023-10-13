
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./balanceFormSchema";
import { BalanceWrapper, FormBalance, BalanceLabel, BalanceInput, BalanceCurrency, Button } from "./BalanceForm.styled";
import { cutValue, normalizeValue } from "./balanceFormServices";
import { useEffect, useCallback } from "react";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { useDispatch } from "react-redux";
import { addStartBalance } from "../../redux/auth/operations";


export const BalanceForm = () => {

    const { user } = useAuth();
    const initialValue = useCallback(() => {
        return user.balance ? user.balance : 0.00.toFixed(2);
    }, [user.balance])
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: { balance: initialValue() },
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (user) {
            setValue('balance', initialValue())
        }
            
    }, [initialValue, setValue, user])

    const onSubmit =  ({balance}) => {
        dispatch(addStartBalance(balance));
    }


    const onInputChange = (e) => {
        const value = e.target.value;

        const normalizedValue = cutValue(value);

        setValue('balance', normalizedValue);
    }

    const handleInputBlur = (e) => {
        const value = e.target.value;

        const normalizedValue = normalizeValue(value)

        setValue('balance', normalizedValue);
    };

    const isDisabled = () => {
        return user.balance !== null || user.balance === undefined ? true : false
    }

    return (
        <>
            <FormBalance onSubmit={handleSubmit(onSubmit)}>
                <BalanceLabel>Balance:</BalanceLabel>
                <BalanceWrapper>
                    <BalanceInput
                        {...register('balance')}
                        type="text"
                        onChange={onInputChange}
                        onBlur={handleInputBlur}
                        disabled={isDisabled()}
                    />
                    <BalanceCurrency>UAH</BalanceCurrency>
                </BalanceWrapper>
                <Button disabled={isDisabled()}>Confirm</Button>
                <p>{errors.balance?.message}</p>
            </FormBalance>
        </>
    )
}