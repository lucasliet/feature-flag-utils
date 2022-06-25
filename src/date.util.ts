/**
* @param date dd/MM/yyyy or yyyy-MM-dd string
* @return Date object
*/
export const parseDate = (date: string): Date => {
  if (isInBRFormat(date)) {

    const [day, month, year] = date.split('/');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

  } else if (isInISOFormat(date)) {

    const [year, month, day] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

  } else throw new Error(`Could not parse ${date}, it is not in ISO or BR format`);
}

/**
 * @param date Date object, a dd/MM/yyyy string
 * or a Array containing that Date/string on position [0]
 * @return date string in ISO format 'yyyy-MM-dd'
 */
export const toISOFormat = (date: Date | string | Array<Date | string>): string => {
  if (date instanceof Array) date = date[0];

  if (!(date instanceof Date)) {
    if (isInISOFormat(date))
      return date;
    else
      date = parseDate(date);
  }

  return date.toISOString().split('T')[0];
}

/**
 * @param date Date object, a yyyy-MM-dd string
 * or a Array containing that Date/string on position [0]
 * @return date string in pt-BR format 'dd/MM/yyyy'
 */
export const toBRFormat = (date: Date | string | Array<Date | string>): string => {
  if (date instanceof Array) date = date[0];

  if (!(date instanceof Date)) {
    if (isInBRFormat(date))
      return date;
    else
      date = parseDate(date);
  }

  date = toISOFormat(date);

  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}

/**
* Check if given string is in ISO date format 'yyyy-MM-dd'
* @param date string
* @returns true or false
*/
export const isInISOFormat = (date: string): boolean => {
  return date.match(/\d{4}-\d{2}-\d{2}/g) ? true : false;
}

/**
 * Check if given string is in BR date format 'dd/MM/yyyy'
 * @param date string
 * @returns true or false
 */
export const isInBRFormat = (date: string): boolean => {
  return date.match(/\d{2}\/\d{2}\/\d{4}/g) ? true : false;
}