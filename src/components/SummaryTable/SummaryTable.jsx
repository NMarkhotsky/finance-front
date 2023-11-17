import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useAuth } from "../../hooks/useAuth/useAuth";
import { getExpensesSummary } from "../../services/expensesApi";
import { getIncomeSummary } from "../../services/incomeApi";
import { formatDateToMonth, formatSum } from "../../services/balanceFormServices";
import { TableContainer, Table, TableHead, TableHeadTR, TableHeadTH, TableBody, TableBodyTR, TableBodyTd } from "./SummaryTable.styled";

export const SummaryTable = ({ type }) => {

    const [data, setData] = useState([]);
    const { user } = useAuth();
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('month', {
            cell: (month) => <span>{month.getValue()}</span>
        }),

        columnHelper.accessor('summary', {
            cell: (summary) => <span>{summary.getValue()}</span>
        }),
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })
    
    useEffect(() => {
        getSummaryReport(type)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.balance, type])

    const getSummaryReport = async (type) => {
        if (type === 'expenses') {
            const { report } = await getExpensesSummary();
            const normalizedData = formatData(report)
            setData(normalizedData)

        } else {
            const { report } = await getIncomeSummary();
            const normalizedData = formatData(report)
            setData(normalizedData)
        }
    }
    const formatData = (data) => {
        return data.map(({month, total_sum: summary}) => {
            const formatedMonth = formatDateToMonth(month)
            const formatedSum = formatSum(summary)
            return {month: formatedMonth, summary: formatedSum}
        })
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <TableHeadTR key={headerGroup.id}>
                                {
                                    headerGroup.headers.map((header) => (
                                        <TableHeadTH key={header.id} header={header.id} >
                                            {
                                                header.id === 'summary' ? flexRender(header.column.columnDef.header, header.getContext()) : null
                                            }
                                        </TableHeadTH>
                                    ))
                                }
                            </TableHeadTR>
                        ))
                    }
                </TableHead>
                <TableBody>
                    {
                        table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableBodyTR key={row.id}>
                                    {
                                        row.getVisibleCells().map((cell) => (
                                            <TableBodyTd key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell(cell), cell.getContext())}
                                            </TableBodyTd>
                                        ))
                                    }
                                </TableBodyTR>
                            )))
                        : null
                    }
                </TableBody>
            </Table>    
        </TableContainer>
    )

}

SummaryTable.propTypes = {
    type: PropTypes.string.isRequired,
}