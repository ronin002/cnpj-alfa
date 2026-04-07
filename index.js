

const calcDigit = (piece, weights) => {
    let sum = 0;
    for (let i = 0; i < piece.length; i++) {
        sum += parseInt(piece.charCodeAt(i) - 48) * weights[i];
    }

    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
}

const isValidCNPJ = (value) => {
    
    
    if (/[^A-Za-z0-9.\-/]/.test(value)) {
        return false;
    }

    const valueClean = value.replace(/[^A-Z0-9]/gi, '').toUpperCase(); // Remove invalid character and convert to uppercase 
                                                                       //(necessary for ASCII subtraction in calcDigit) )

    if (valueClean.length !== 14) {
        return false;
    }

    if (/^([A-Z0-9])\1{13}$/.test(valueClean)) return false; //avoid repetitive sequences like 'AAAAAAAAAAAAAA' or '11111111111111'

     
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const digit1 = calcDigit(valueClean.slice(0, 12), weights1);
    const digit2 = calcDigit(valueClean.slice(0, 13), weights2);


    if (digit1.toString() === valueClean[12] && digit2.toString() === valueClean[13]) {
        return true;
    }

    return false;

}

exports.isValidCNPJ = isValidCNPJ;