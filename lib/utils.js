export const currencyformatter = (amount) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    currency: "INR",
    style: "currency",
  });

  return formatter.format(amount);
};
