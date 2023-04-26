export const usNumberformatter = (number: number, decimals = 0) => Intl.NumberFormat('us', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
}).format(Number(number)).toString();

export const formatters: {[key: string]: any} = {
    Sales: (number: number) => `$ ${usNumberformatter(number)}`,
    Units: (number: number) => `${usNumberformatter(number)}`,
    Customers: (number: number) => `${usNumberformatter(number)}`,
    Delta: (number: number) => `${usNumberformatter(number, 2)}%`,
};

export const classNames: { (...classes: string[]): string } = (
    ...classes: string[]
): string => classes.filter(Boolean).join(' ');

export const Kpis = {
    Sales: 'Gross volume',
    Units: 'Units sold',
    Customers: 'Customers',
};

export const TabViews = {
    Overview: 'Overview',
    Detail: 'Detail',
    Live: 'Live',
};