import { formatDate } from './date'

describe('Date Utils', () => {
  describe('formatDate', () => {
    it('should format valid date string in Indonesian locale', () => {
      const result = formatDate('2023-12-25')
      expect(result).toBe('Desember 2023')
    })

    it('should format different date formats', () => {
      expect(formatDate('2023-01-15')).toBe('Januari 2023')
      expect(formatDate('2023-06-03')).toBe('Juni 2023')
      expect(formatDate('2023-11-30')).toBe('November 2023')
    })

    it('should return empty string for empty input', () => {
      expect(formatDate('')).toBe('')
      expect(formatDate(null as any)).toBe('')
      expect(formatDate(undefined as any)).toBe('')
    })

    it('should return original string for invalid date', () => {
      expect(formatDate('invalid-date')).toBe('invalid-date')
      expect(formatDate('2023-13-45')).toBe('2023-13-45')
      expect(formatDate('not-a-date')).toBe('not-a-date')
    })

    it('should handle edge cases', () => {
      expect(formatDate('2023-02-29')).toBe('Maret 2023') // Invalid date becomes March 1st
    })
  })
})