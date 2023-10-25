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

        // const formattedValue = Number(Math.round(value * 100) / 100);
        const formattedValue = parseFloat(value).toFixed(2);

        return formattedValue;
    }