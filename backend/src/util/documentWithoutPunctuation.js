module.exports = (documentString) => {
    if(documentString.length == 14){
        cpfArray = documentString.split('.');
        cpfDigitArray = cpfArray[2].split('-');
        documentWithoutPunctuation = cpfArray[0] + cpfArray[1] + cpfDigitArray[0] + cpfDigitArray[1];

        return documentWithoutPunctuation;
    }else{
        cnpjArray = documentString.split('.');
        cnpjDigitArray = cnpjArray[2].split('-');
        cnpjDigitBarArray = cnpjDigitArray[0].split('/');

        documentWithoutPunctuation = cnpjArray[0] + cnpjArray[1] + cnpjDigitBarArray[0] + cnpjDigitBarArray[1] + cnpjDigitArray[1];

        return documentWithoutPunctuation;
    }
}	