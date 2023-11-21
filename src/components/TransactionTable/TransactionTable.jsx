import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import PropTypes from 'prop-types';

import { useAuth } from "../../hooks/useAuth/useAuth";
import { fetchCurrentUser } from "../../redux/auth/operations";

import { getIncome } from "../../services/incomeApi";
import { getExpenses } from "../../services/expensesApi";
import { deleteTransaction } from "../../services/transactionsApi";

import { formatData } from "../../services/balanceFormServices";

import { Table, TableContainer, TableScroll, TableHead, TableHeadTR, TableHeadTH, TableBody, TableBodyTR, TableBodyTd } from "./TransactionTable.styled";
import { DeleteButton } from "../DeleteButton/DeleteButton";

export const TransactionTable = ({type}) => {
    const [data, setData] = useState([]);
    const { user } = useAuth();
    const dispatch = useDispatch();

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
            cell: (del) => <span>
                <DeleteButton
                    onDeleteClick={() => {
                        handleDelete(del.row.original.id)
                    }} />
            </span>
        })         
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    useEffect(() => {
        getTransactions(type);

    },[user.balance, type])

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

    const handleDelete = async (recordId) => {
        await deleteTransaction(recordId);
        dispatch(fetchCurrentUser());       
    };

    return (
        <TableContainer>
            <TableScroll>
                <Table>
                    <TableHead>
                        {
                        data && table.getHeaderGroups().map((headerGroup) => (
                            <TableHeadTR key={headerGroup.id}>
                                {
                                    headerGroup.headers.map((header) => (
                                        <TableHeadTH key={header.id} header={header.id} >
                                            {
                                                flexRender(header.column.columnDef.header, header.getContext())
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
                                data && table.getRowModel().rows.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableBodyTR key={row.id}>
                                            {
                                                row.getVisibleCells().map((cell) => (
                                                    <TableBodyTd key={cell.id} value={cell.row.original.sum}>
                                                        {
                                                            flexRender(
                                                                cell.column.id === 'sum' ? (
                                                                    <>
                                                                        <span>{cell.row.original.sum} грн</span>
                                                                    </>
                                                                ) :
                                                                    cell.column.columnDef.cell(cell), cell.getContext())
                                                        }
                                                    </TableBodyTd>
                                                ))
                                            }
                                    </TableBodyTR>
                                )))
                                : null
                            }
                    </TableBody>
                </Table>
            </TableScroll>            
        </TableContainer>
    )
}

TransactionTable.propTypes = {
    type: PropTypes.string.isRequired,
}