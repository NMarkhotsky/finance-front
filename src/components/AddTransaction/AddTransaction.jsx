import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import {
  AddTransactionForm,
  DataWrapper,
  CategoryInput,
  DescriptionInput,
  Sum,
  SumInput,
  SumWrapper,
  Currency,
  CalcIconWrapper,
  ButtonsWrapper,
  AcceptButton,
  ClearButton,
  SelectListStyles,
} from './AddTransaction.styled';
import { Icon } from '../../shared/components/Icon/Icon';
import {
  cutValue,
  formatSum,
  normalizeValue,
} from '../../services/balanceFormServices';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../../redux/auth/operations';
import { yupResolver } from '@hookform/resolvers/yup';
import { transactionSchema } from '../../constants/validationSchemas';
import { addTransaction } from '../../services/transactionsApi';
import {
  CATEGORIES_EXPENSES,
  CATEGORIES_INCOME,
} from '../../constants/globalConstants';
import { CalcForm } from '../CalcForm/CalcForm';
import { ShowToast } from '../../utils';

export const AddTransaction = ({ type }) => {
  const initialValues = {
    type,
    description: '',
    category: null,
    sum: (0.0).toFixed(2),
  };

  const [data, setData] = useState(initialValues);
  const [isOpenCalc, setIsOpenCalc] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(transactionSchema),
  });

  useEffect(() => {
    setValue('type', type);
  }, [type, setValue]);

  const onSumChange = e => {
    const value = e.target.value;
    const normalizedValue = cutValue(value);
    setValue('sum', normalizedValue);
  };

  const handleSumBlur = e => {
    const value = e.target.value;
    const normalizedValue = normalizeValue(value);
    const formatValue = formatSum(normalizedValue);
    setValue('sum', formatValue);
  };

  const onSubmit = async data => {
    await addTransaction({
      ...data,
      type: data.type === 'expenses' ? 'expense' : 'income',
      category: data.category.value,
    });
    dispatch(fetchCurrentUser());
    reset(initialValues);
    setData(initialValues);
  };

  const onClear = () => {
    setData(initialValues);
    reset(initialValues);
  };

  const handleCategoryChange = selectedOption => {
    setData(prev => ({ ...prev, category: selectedOption }));
    setValue('category', selectedOption);
  };

  const handleCalcSubmit = value => {
    const formatValue = formatSum(value);
    setValue('sum', formatValue);
  };

  const handleClickCalc = () => {
    setIsOpenCalc(prev => !prev);
  };

  const closeCalc = () => {
    setIsOpenCalc(prev => !prev);
  };

  useEffect(() => {
    if (errors.description) ShowToast('error', errors.description?.message);
    else if (errors.category) ShowToast('error', errors.category?.message);
    else if (errors.sum) ShowToast('error', errors.sum?.message);
  }, [errors.category, errors.description, errors.sum]);

  return (
    <>
      <AddTransactionForm onSubmit={handleSubmit(onSubmit)}>
        <DataWrapper>
          <DescriptionInput
            {...register('description')}
            type="text"
            placeholder={t('transaction_description_placeholder')}
          />

          <CategoryInput>
            <Select
              {...register('category')}
              options={
                type === 'income' ? CATEGORIES_INCOME : CATEGORIES_EXPENSES
              }
              placeholder={t('transaction_category_placeholder')}
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
              <div onClick={handleClickCalc}>
                <Icon iconName="icon-calculator" width={18} height={18} />
              </div>
            </CalcIconWrapper>
          </SumInput>
        </DataWrapper>

        <ButtonsWrapper>
          <AcceptButton type="submit">{t('button_input')}</AcceptButton>
          <ClearButton type="button" onClick={onClear}>
            {t('button_clear')}
          </ClearButton>
        </ButtonsWrapper>
      </AddTransactionForm>
      {isOpenCalc && (
        <CalcForm handleCalcSubmit={handleCalcSubmit} closeCalc={closeCalc} />
      )}
    </>
  );
};

AddTransaction.propTypes = {
  type: PropTypes.string.isRequired,
};
