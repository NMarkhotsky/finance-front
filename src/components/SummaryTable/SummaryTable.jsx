import { useEffect, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { getExpensesSummary } from '../../services/expensesApi';
import { getIncomeSummary } from '../../services/incomeApi';
import {
  formatDateToMonth,
  formatSum,
} from '../../services/balanceFormServices';
import {
  TableContainer,
  Table,
  TableHead,
  TableHeadTR,
  TableHeadTH,
  TableBody,
  TableBodyTR,
  TableBodyTd,
} from './SummaryTable.styled';

export const SummaryTable = ({ type }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [data, setData] = useState([]);

  const { user } = useAuth();

  const columnHelper = createColumnHelper();

  const columns = [
    {
      header: t('table_summary_header'),
      columns: [
        columnHelper.accessor('month', {
          cell: month => <span>{month.getValue()}</span>,
        }),

        columnHelper.accessor('sum', {
          cell: sum => <span>{sum.getValue()}</span>,
        }),
      ],
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (user.balance) {
      getSummaryReport(type);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.balance, type, language]);

  const getSummaryReport = async type => {
    if (type === 'expenses') {
      const { report } = await getExpensesSummary();
      const normalizedData = formatData(report);
      setData(normalizedData);
    } else {
      const { report } = await getIncomeSummary();
      const normalizedData = formatData(report);
      setData(normalizedData);
    }
  };
  const formatData = data => {
    return data.map(({ month, total_sum: sum }) => {
      const formatedMonth = formatDateToMonth(month, language);
      const formatedSum = formatSum(sum);
      return { month: formatedMonth, sum: formatedSum };
    });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {data &&
            table.getHeaderGroups().map(headerGroup => (
              <TableHeadTR key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHeadTH
                    key={header.id}
                    header={header.id}
                    colSpan={header.colSpan}
                  >
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
                    <TableBodyTd key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell(cell),
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

SummaryTable.propTypes = {
  type: PropTypes.string.isRequired,
};
