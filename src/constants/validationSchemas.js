import * as yup from 'yup';
import { t } from 'i18next';

export const transactionSchema = yup
  .object({
    description: yup.string().required(t('error_validation_description')),
    category: yup
      .object({
        value: yup.string().required(),
        label: yup.string().required(),
      })
      .required(t('error_validation_category')),
    sum: yup
      .number()
      .positive(t('error_validation_sum_positive'))
      .required(t('error_validation_sum_required'))
      .min(0.01)
      .test('decimal', 'Maximum of 2 decimal places', value =>
        /^\d+(\.\d{1,2})?$/.test(value)
      ),
  })
  .required();

export const balanceSchema = yup
  .object({
    balance: yup
      .number()
      .positive()
      .required()
      .min(0.01)
      .test('decimal', 'Maximum of 2 decimal places', value =>
        /^\d+(\.\d{1,2})?$/.test(value)
      ),
  })
  .required();
