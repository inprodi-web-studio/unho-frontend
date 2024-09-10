const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-MX", {
        style                 : "currency",
        currency              : "MXN",
        currencyDisplay       : "symbol",
        currencySign          : "accounting",
        minimumFractionDigits : 2,
    }).format(amount);
};

export default formatCurrency;