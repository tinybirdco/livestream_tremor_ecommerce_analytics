export const usNumberformatter = (number: number, decimals = 0) =>
  Intl.NumberFormat('us', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Number(number))
    .toString();

export const classNames: { (...classes: string[]): string } = (
  ...classes: string[]
): string => classes.filter(Boolean).join(' ');

export const Kpis = {
  Sales: 'Sales',
  Units: 'Units sold',
};

export const formatters: { [key: string]: any } = {
  [Kpis.Sales]: (number: number) => `$ ${usNumberformatter(number)}`,
  [Kpis.Units]: (number: number) => `${usNumberformatter(number)}`,
};
