    export const cutValue = (value) => {
        value = value.replace(/[^\d.]/g, "");

        const decimalCount = (value.match(/\./g) || []).length;

        if (decimalCount > 1) {

            value = value.replace(/\./g, (match, offset, input) => {
                return offset === input.indexOf('.') ? match : '';
            });
        }
        
        return value
    }

    export const normalizeValue = (value) => {
        if (value.startsWith(".")) {
        value = "0" + value;
        }

        const decimalCount = (value.match(/\./g) || []).length;

        if (decimalCount === 0) {
        value = value + ".00";
        } else if (decimalCount === 1 && value.endsWith(".")) {
            value = value + "00";
        }else if (decimalCount === 1 && !value.endsWith(".")) {
            value = value + "0";
        }

        const formattedValue = parseFloat(value).toFixed(2);

        return formattedValue;
    }

    export const formatSum = (sum) => {
        const parts = Number(sum).toFixed(2).split('.');
        const formattedNumber = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return `${formattedNumber}.${parts[1]}`;
    }

    export const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`; 
    }

    export const formatData = (data, type) => {
        if (type) {
            if (type === 'expenses') {
                return data.map((item) => ({
                    ...item,
                    date: formatDate(item.date),
                    sum: formatSum((0 - item.sum).toFixed(2))
                }))
            } else {
                return data.map((item) => ({
                    ...item,
                    date: formatDate(item.date),
                    sum: formatSum(item.sum)
                }))
            }
        } else {
            return data.map((item) => ({
                ...item,
                date: formatDate(item.date),
                sum: item.type === 'income' ?
                    formatSum(item.sum) :
                        formatSum((0 - item.sum).toFixed(2))
            }))
        }
    }

    export const formatDateToMonth = (date) => {
        const dateObj = new Date(date)
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObj);
    }