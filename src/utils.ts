
export interface Expense {
  id: string,
  description: string,
  amount: number,
  category: string
}

/**
 * 
 * @param str String to capitalize
 * @returns {string}
 */
export function capitalize(str: string): string {
  return `${str.charAt(0).toLocaleUpperCase()}${str.slice(1)}`;
}

export const categories = ['groceries', 'utilities', 'entertainment'] as const;
