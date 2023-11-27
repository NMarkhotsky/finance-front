import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { getAllTransactions } from "../../services/transactionsApi";

import { formatSum } from "../../services/balanceFormServices";

import { TotalCountFormWrapper, TypeCountWrapper, TypeCountTitle, TypeCountSum } from "./TotalCountForm.styled";

export const TotalCountForm = ({date}) => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const getTransactions = async (date) => {
            const { transactions } = await getAllTransactions(date);
            const totals = countTotalSums(transactions);
            setData(totals)
        }
        if (date) {
            getTransactions(date);
        }

    }, [date])

    const countTotalSums = (transactions) => {

        let totals = { income: 0, expense: 0 };

        const totalSums = transactions.reduce((total, transaction) => {
            
            transaction.type === 'income' ?
                total.income += Number(transaction.sum) :
                total.expense += Number(transaction.sum);

            return total;
        }, totals)

        totalSums.income = formatSum(totalSums.income);
        totalSums.expense = formatSum(totalSums.expense);

        return totalSums
    }

    return (
        <TotalCountFormWrapper>
            <TypeCountWrapper>
                <TypeCountTitle>Expenses:</TypeCountTitle>
                {data && <TypeCountSum type={'expense'}>- {data.expense} грн</TypeCountSum>}
            </TypeCountWrapper>
            <TypeCountWrapper>
                <TypeCountTitle>Income:</TypeCountTitle>
                {data && <TypeCountSum type={'income'}>+ {data.income} грн</TypeCountSum>}
            </TypeCountWrapper>
        </TotalCountFormWrapper>
    )
}

TotalCountForm.propTypes = {
    date: PropTypes.any,
}