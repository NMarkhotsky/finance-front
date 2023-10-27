import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { getIncome } from "../../services/incomeApi";
import { getExpenses } from "../../services/expensesApi";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
// import { TableStyled } from "./TransactionTable.styled";

export const TransactionTable = () => {

    const type = 'income' //will be in props

    const [data, setData] = useState([]);
    const { user } = useAuth();

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('date', {
            cell: (date) => <span>{date.getValue()}</span>
        }),

        columnHelper.accessor('description', {
            cell: (description) => <span>{description.getValue()}</span>
        }),

        columnHelper.accessor('category', {
            cell: (category) => <span>{category.getValue()}</span>
        }),

        columnHelper.accessor('sum', {
            cell: (sum) => <span>{sum.getValue()}</span>
        }),
        
        columnHelper.accessor('delete', {
            cell: (del) => <span>{del.getValue()}</span>
        })         
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    useEffect(() => {
        getTransactions(type).then(console.log(data));

    },[user.balance])

    const getTransactions = async (type) => {

        if (type === 'expenses') {
            const transactions = await getExpenses();
            const normalizedData = formatData(transactions, type);
            setData(normalizedData);
        } else {
            const transactions = await getIncome();
            const normalizedData = formatData(transactions, type);
            setData(normalizedData);
        }
        
    }

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`; 
    }

    const formatData = (data, type) => {
        if (type === 'expenses') {
            return data.map((item) => ({ ...item, date: formatDate(item.date), sum: (0 - item.sum).toFixed(2) }))
        } else {
            return data.map((item) => ({ ...item, date: formatDate(item.date) }))
        }
    }



    return (
        <div>
            <table>
                <thead>
                    {
                    table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {
                                headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {
                                            flexRender(header.column.columnDef.header, header.getContext())
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {
                                        row.getVisibleCells().map((cell) => (
                                            <td key={cell.id}>
                                                {
                                                    flexRender(cell.column.columnDef.cell, cell.getContext())
                                                }
                                            </td>
                                        ))
                                    }
                            </tr>
                        )))
                        : null
                    }
                </tbody>
            </table>
        </div>
    )
}