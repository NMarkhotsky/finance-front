export const BASE_URL = 'https://finance-backend-eight.vercel.app/api';

import Transport from "../assets/images/car.png"; 
import Products from "../assets/images/products.png"; 
import Health from  "../assets/images/health.png"; 
import Alcohol from "../assets/images/alcohol.png"; 
import Entertainment from "../assets/images/kite.png"; 
import Housing from "../assets/images/housing.png"; 
import Technique from "../assets/images/tools.png"; 
import Communal from "../assets/images/communicate.png" ; 
import Sports from "../assets/images/hobbies.png" ; 
import Education from "../assets/images/book.png" ; 
import Other from "../assets/images/other.png"; 
import Salary from "../assets/images/salary.png"; 
import OtherIncome from "../assets/images/salary-other.png"; 


export const CATEGORIES_EXPENSES = [
    { value: 'Transport', label: 'Transport', image: Transport },
    { value: 'Products', label: 'Products', image: Products },
    { value: 'Health', label: 'Health', image: Health },
    { value: 'Alcohol', label: 'Alcohol', image: Alcohol },
    { value: 'Entertainment', label: 'Entertainment', image: Entertainment },
    { value: 'Housing', label: 'Housing', image: Housing },
    { value: 'Technique', label: 'Technique', image: Technique },
    { value: 'Communal, communication', label: 'Communal, communication', image: Communal },
    { value: 'Sports, hobbies', label: 'Sports, hobbies', image: Sports },
    { value: 'Education', label: 'Education', image: Education },
    { value: 'Other', label: 'Other', image: Other },
];

export const CATEGORIES_INCOME = [
    { value: 'Salary', label: 'Salary', image: Salary },
    { value: 'Other income', label: 'Other income', image: OtherIncome },
];
