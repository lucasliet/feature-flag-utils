/**
 * Checks if the company is listed in the list of companies to be on the new feature.
 * If the company is in its short form, it will be checked with {@link String#startsWith}
 * If the company is a number, convert the list of companies to number before check
 * @param company cnpj to be checked
 * @return true if the company is listed, false otherwise
 */
export const isCompanyListed = (companies: string[], company: string | number): boolean => {
  if(typeof company === 'string') {
    return company.length < 14
      ? companies.some(c => c.startsWith(company))
      : companies.includes(company);
  } else {
    return companies.map(c => Number(c))
      .includes(company);
  }
}

/**
 * Checks if percentage is between 0 and 100, and then generates a random number in that range
 * to check if it is less or equal than the percentage
 * @param percentage percentage of flux to enter the new feature
 * @return true if the percentage is less or equal than the random number, false otherwise
 */
export const isRandomInPercentage = (percentage: number): boolean =>
  percentage > 0 && percentage <= 100 && Math.round(Math.random() * 100) <= percentage;