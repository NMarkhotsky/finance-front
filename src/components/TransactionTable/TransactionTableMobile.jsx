import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { fetchCurrentUser } from '../../redux/auth/operations';
import { getIncome } from '../../services/incomeApi';
import { getExpenses } from '../../services/expensesApi';
import {
  deleteTransaction,
  getAllTransactions,
} from '../../services/transactionsApi';
import { formatData } from '../../services/balanceFormServices';
import {
  Table,
  TableContainer,
  TableHead,
  TableHeadTR,
  TableHeadTH,
  TableBody,
  TableBodyTR,
  TableBodyTd,
} from './TransactionTableMobile.styled';
import { DeleteButton } from '../DeleteButton/DeleteButton';

export const TransactionTableMobile = ({ type }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const [data, setData] = useState([]);

  const { user } = useAuth();
  const dispatch = useDispatch();

  const prevType = useRef(type);

  const columnHelper = createColumnHelper();

  const categoryKeys = {
    Transport: t('transaction_categories_expenses_transport'),
    Products: t('transaction_categories_expenses_products'),
    Health: t('transaction_categories_expenses_health'),
    Alcohol: t('transaction_categories_expenses_alcohol'),
    Entertainment: t('transaction_categories_expenses_entertainment'),
    Housing: t('transaction_categories_expenses_housing'),
    Technique: t('transaction_categories_expenses_technique'),
    'Communal, communication': t('transaction_categories_expenses_communal'),
    'Sports, hobbies': t('transaction_categories_expenses_sports'),
    Education: t('transaction_categories_expenses_education'),
    Other: t('transaction_categories_expenses_other'),
    Salary: t('transaction_categories_income_salary'),
    'Other income': t('transaction_categories_income_other'),
  };

  const columns = [
    columnHelper.accessor('description', {
      cell: description => <span>{description.getValue()}</span>,
    }),

    columnHelper.accessor('date', {
      cell: date => <span>{date.getValue()}</span>,
    }),

    columnHelper.accessor('category', {
      cell: category => (
        <span>{translateCategoryKey(category.getValue())}</span>
      ),
    }),

    columnHelper.accessor('sum', {
      cell: sum => <span>{sum.getValue()}</span>,
    }),

    columnHelper.accessor('delete', {
      cell: del => (
        <span>
          <DeleteButton
            onDeleteClick={() => {
              handleDelete(del.row.original.id);
            }}
          />
        </span>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (user.balance) {
      if (prevType.current === type) {
        getAllData();
      } else {
        getTransactions(type);
        prevType.current = type;
      }
    }
  }, [user.balance, type, language]);

  const getAllData = async () => {
    const { transactions } = await getAllTransactions();
    const normalizedData = formatData(transactions);
    setData(normalizedData);
  };

  const getTransactions = async type => {
    if (type === 'expenses') {
      const transactions = await getExpenses();
      const normalizedData = formatData(transactions, type);
      setData(normalizedData);
    } else {
      const transactions = await getIncome();
      const normalizedData = formatData(transactions, type);
      setData(normalizedData);
    }
  };

  const translateCategoryKey = category => {
    return categoryKeys[category];
  };

  const handleDelete = async recordId => {
    await deleteTransaction(recordId);
    dispatch(fetchCurrentUser());
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {data &&
            table.getHeaderGroups().map(headerGroup => (
              <TableHeadTR key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHeadTH key={header.id} header={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHeadTH>
                ))}
              </TableHeadTR>
            ))}
        </TableHead>
        <TableBody>
          {data && table.getRowModel().rows.length
            ? table.getRowModel().rows.map(row => (
                <TableBodyTR key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableBodyTd key={cell.id} value={cell.row.original.sum}>
                      {flexRender(
                        cell.column.id === 'sum' ? (
                          <>
                            <span>{cell.row.original.sum} грн</span>
                          </>
                        ) : (
                          cell.column.columnDef.cell(cell)
                        ),
                        cell.getContext()
                      )}
                    </TableBodyTd>
                  ))}
                </TableBodyTR>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TransactionTableMobile.propTypes = {
  type: PropTypes.string.isRequired,
};
