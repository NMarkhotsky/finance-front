import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { normalizeValue, cutValue } from '../../services/balanceFormServices';

import {
  ArrowBack,
  CalcButton,
  CalcButtonItem,
  CalcButtonList,
  CalcInput,
  CalcStyledForm,
  SubmitButton,
  CalcContainer,
} from './CalcForm.styled';

export const CalcForm = ({ handleCalcSubmit, closeCalc }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', 'back'];

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeCalc();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeCalc]);

  const handleClick = e => {
    const value = e.target.getAttribute('data-value');
    const prevValue = getValues('sum');

    value === 'back'
      ? prevValue === ''
        ? prevValue
        : setValue('sum', prevValue.slice(0, -1))
      : value === '.' && prevValue.includes('.')
      ? setValue('sum', prevValue)
      : setValue('sum', prevValue + value);
  };

  const handleChangeSum = e => {
    const value = e.target.value;
    const normalizedValue = cutValue(value);
    setValue('sum', normalizedValue);
  };

  const onSubmit = ({ sum }) => {
    const normalizedValue = normalizeValue(sum);
    handleCalcSubmit(normalizedValue);
    closeCalc();
    reset();
  };

  const onClickModal = e => {
    if (e.target === e.currentTarget) {
      closeCalc();
    }
  };

  return (
    <CalcContainer onClick={onClickModal}>
      <CalcStyledForm onSubmit={handleSubmit(onSubmit)}>
        <CalcInput
          {...register('sum')}
          type="text"
          placeholder="00.00"
          value={getValues('sum')}
          onChange={handleChangeSum}
        />
        <CalcButtonList>
          {buttons.map(button => (
            <CalcButtonItem key={button}>
              <CalcButton
                type="button"
                data-value={button}
                onClick={handleClick}
              >
                {button === 'back' ? (
                  <ArrowBack data-value={button}>&#5193;</ArrowBack>
                ) : (
                  button
                )}
              </CalcButton>
            </CalcButtonItem>
          ))}
        </CalcButtonList>
        <SubmitButton type="submit">enter</SubmitButton>
        <p>{errors.sum?.message}</p>
      </CalcStyledForm>
    </CalcContainer>
  );
};

CalcForm.propTypes = {
  handleCalcSubmit: PropTypes.func.isRequired,
  closeCalc: PropTypes.func.isRequired,
};
