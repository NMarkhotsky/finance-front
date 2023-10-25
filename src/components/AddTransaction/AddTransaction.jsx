import { useForm } from "react-hook-form";
import {
    AddTransactionForm,
    DataWrapper,
    CategoryInput,
    DescriptionInput,
    Sum, SumInput,
    SumWrapper,
    Currency,
    CalcIconWrapper,
    ButtonsWrapper,
    AcceptButton,
    ClearButton,
    SelectListStyles
} from "./AddTransaction.styled";
import { Icon } from "../../shared/components/Icon/Icon";
import { cutValue, normalizeValue } from "../../services/balanceFormServices";
import Select from 'react-select';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../redux/auth/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { transactionSchema } from "../../constants/validationSchemas";
import { addTransaction } from '../../services/transactionsApi';
import { CATEGORIES_EXPENSES, CATEGORIES_INCOME } from "../../constants/globalConstants";


export const AddTransaction = () => {
    const type = 'expense' //need to get from props
    const initialValues = {
        type,
        description: '',
        category: null,
        sum: 0.00.toFixed(2),
    }

    const [data, setData] = useState(initialValues);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(transactionSchema)
    });

    const onSumChange = (e) => {
        const value = e.target.value;
        const normalizedValue = cutValue(value);
        setValue('sum', normalizedValue);
    }

    const handleSumBlur = (e) => {
        const value = e.target.value;
        const normalizedValue = normalizeValue(value)
        setValue('sum', normalizedValue);
    };
    
    const onSubmit = async (data) => {
        await addTransaction({...data, category: data.category.value});
        dispatch(fetchCurrentUser())
        reset(initialValues);
        setData(initialValues);
    }

    const onClear = () => {
        setData(initialValues);
        reset(initialValues);
    }

    const handleCategoryChange = (selectedOption) => {
        setData(prev => ({ ...prev, category: selectedOption }));
        setValue('category', selectedOption);
    };

    return (
        <AddTransactionForm onSubmit={handleSubmit(onSubmit)}>
            <DataWrapper>
                <DescriptionInput 
                    {...register('description')}
                    type="text"
                    placeholder="Product description"
                /> 
                
                <CategoryInput>
                    <Select
                        {...register('category')}
                        options={type === 'expense'? CATEGORIES_EXPENSES : CATEGORIES_INCOME}
                        placeholder="Product category"
                        value={data.category}
                        onChange={handleCategoryChange}
                        styles={SelectListStyles}
                    />

                </CategoryInput>

                <SumInput>
                    <SumWrapper>
                        <Sum 
                        {...register('sum')}
                        type="text"
                        onChange={onSumChange}
                        onBlur={handleSumBlur}
                        />

                        <Currency>UAH</Currency>
                    </SumWrapper>

                    <CalcIconWrapper>
                        <Icon iconName="icon-calculator" width={18} height={18}/>
                    </CalcIconWrapper>                
                </SumInput>

                <p>{errors.description?.message}</p>
                <p>{errors.category?.message}</p>
                <p>{errors.sum?.message}</p>                
            </DataWrapper>

            <ButtonsWrapper>
                <AcceptButton type="submit">Input</AcceptButton>
                <ClearButton type="button" onClick={onClear}>Clear</ClearButton>
            </ButtonsWrapper>
        </AddTransactionForm>
    )

}