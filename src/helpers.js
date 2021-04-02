export const currencyHelper = (currencyAcronym) => {
  const currencies = {"EUR": "€"}
  const currencySymbol = currencies[currencyAcronym]

  return currencySymbol
}
