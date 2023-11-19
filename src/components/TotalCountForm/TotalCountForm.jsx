import { useState, useEffect } from "react";
import { getAllTransactions } from "../../services/transactionsApi";
import { formatSum } from "../../services/balanceFormServices";
import { TotalCountFormWrapper, TypeCountWrapper, TypeCountTitle, TypeCountSum } from "./TotalCountForm.styled";

export const TotalCountForm = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getTransactions = async () => {
            const { transactions } = await getAllTransactions();
            console.log(transactions);
            const totals = countTotalSums(transactions);
            console.log(totals);
            setData(totals)
        }
        getTransactions();

    }, [])

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
                <TypeCountSum type={'expense'}>- {data.expense} грн</TypeCountSum>
            </TypeCountWrapper>
            <TypeCountWrapper>
                <TypeCountTitle>Income:</TypeCountTitle>
                <TypeCountSum type={'income'}>+ {data.income} грн</TypeCountSum>
            </TypeCountWrapper>
        </TotalCountFormWrapper>
    )
}