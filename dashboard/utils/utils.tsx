export interface PipeParams {
  locations: string[];
  date_from: string;
  date_to: string;
}

export interface FilterProps {
  locations: string[];
}

export const usNumberformatter = (number: number, decimals = 0) =>
  Intl.NumberFormat('us', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Number(number))
    .toString();

export const Kpis = {
  Sales: 'Sales',
  Units: 'Units sold',
};

export const formatters: { [key: string]: any } = {
  [Kpis.Sales]: (number: number) => `$ ${usNumberformatter(number)}`,
  [Kpis.Units]: (number: number) => `${usNumberformatter(number)}`,
};
