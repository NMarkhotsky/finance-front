import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { getIncome } from "../../services/incomeApi";
import { getExpenses } from "../../services/expensesApi";
import { deleteTransaction } from "../../services/transactionsApi";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { formatData } from "../../services/balanceFormServices";
import { Table, TableContainer, TableHead, TableHeadTR, TableHeadTH, TableBody, TableBodyTR, TableBodyTd, DeleteBtn } from "./TransactionTable.styled";
import { Icon } from "../../shared/components/Icon/Icon";
import PropTypes from 'prop-types';

export const TransactionTable = ({type}) => {
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
            cell: (del) => <span>
                <DeleteButton
                    onDeleteClick={() => {
                        console.log(del.row.original.id);
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

    // eslint-disable-next-line react/prop-types
    const DeleteButton = ({ onDeleteClick }) => {

        return (
            <DeleteBtn onClick={onDeleteClick}>
                <Icon iconName="icon-delete" width={18} height={18}  />
            </DeleteBtn>
        );
    };

    const handleDelete = async (recordId) => {
        const result = await deleteTransaction(recordId);
        const newData = await 
        console.log(result);
        console.log(newData);
        
    };

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
                        table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableBodyTR key={row.id}>
                                    {
                                        row.getVisibleCells().map((cell) => (
                                            <TableBodyTd key={cell.id}>
                                                {
                                                    flexRender(cell.column.columnDef.cell, cell.getContext())
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
        </TableContainer>
    )
}

TransactionTable.propTypes = {
    type: PropTypes.string.isRequired,
}