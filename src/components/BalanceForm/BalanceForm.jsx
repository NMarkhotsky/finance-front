import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';

import { balanceSchema } from '../../constants/validationSchemas';

import { useAuth } from '../../hooks/useAuth/useAuth';
import { addStartBalance } from '../../redux/auth/operations';
import {
  cutValue,
  normalizeValue,
  formatSum,
} from '../../services/balanceFormServices';
import { ShowToast } from '../../utils';

import {
  BalanceWrapper,
  FormBalance,
  BalanceLabel,
  BalanceInput,
  BalanceCurrency,
  Button,
  BalanceBar,
} from './BalanceForm.styled';

export const BalanceForm = () => {
  const { user } = useAuth();
  const initialValue = useCallback(() => {
    return user.balance ? formatSum(user.balance) : (0.0).toFixed(2);
  }, [user.balance]);

  const dispatch = useDispatch();

  const location = useLocation();
  const currentLocation = location.pathname;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { balance: initialValue() },
    resolver: yupResolver(balanceSchema),
  });

  useEffect(() => {
    if (user) {
      setValue('balance', initialValue());
    }
  }, [initialValue, setValue, user]);

  const onSubmit = ({ balance }) => {
    ShowToast('success', 'Balance successfully added');
    dispatch(addStartBalance(balance));
  };

  const onInputChange = e => {
    const value = e.target.value;
    const normalizedValue = cutValue(value);
    setValue('balance', normalizedValue);
  };

  const handleInputBlur = e => {
    const value = e.target.value;
    const normalizedValue = normalizeValue(value);
    setValue('balance', normalizedValue);
  };

  const isDisabled = () => {
    return user.balance !== null || user.balance === undefined ? true : false;
  };

  return (
    <>
      <FormBalance onSubmit={handleSubmit(onSubmit)}>
        <BalanceLabel>{t('balance')}:</BalanceLabel>
        <BalanceBar>
          <BalanceWrapper $location={currentLocation}>
            <BalanceInput
              {...register('balance')}
              type="text"
              onChange={onInputChange}
              onBlur={handleInputBlur}
              disabled={isDisabled()}
              $location={currentLocation}
            />
            <BalanceCurrency>UAH</BalanceCurrency>
          </BalanceWrapper>
          <Button $location={currentLocation} disabled={isDisabled()}>
            {t('button_confirm')}
          </Button>
        </BalanceBar>
        <p>{errors.balance?.message}</p>
      </FormBalance>
    </>
  );
};
