import {
  getDates,
  addDays,
  getHolidays,
  getNonWeekendHolidays
} from '../holidayService';
import { isWeekend } from '../weekendService';

describe('holidayService', () => {
  describe('getDates', () => {
    it('returns all dates from start to end inclusively', () => {
      const dates = getDates('2020-01-01', '2020-01-05');

      expect(dates).toEqual([
        new Date('2020-01-01'),
        new Date('2020-01-02'),
        new Date('2020-01-03'),
        new Date('2020-01-04'),
        new Date('2020-01-05')
      ]);
    });

    it('handles dates spanning over different months', () => {
      const dates = getDates('2020-01-30', '2020-02-02');

      expect(dates).toEqual([
        new Date('2020-01-30'),
        new Date('2020-01-31'),
        new Date('2020-02-01'),
        new Date('2020-02-02')
      ]);
    });

    it('handles dates spanning over different years', () => {
      const dates = getDates('2019-12-31', '2020-01-02');

      expect(dates).toEqual([
        new Date('2019-12-31'),
        new Date('2020-01-01'),
        new Date('2020-01-02')
      ]);
    });
  });

  describe('addDays', () => {
    it('can increment a day', () => {
      const date = new Date('2019-12-24');
      const nextDay = addDays(date, 1);

      expect(nextDay).toEqual(new Date('2019-12-25'));
    });

    it('can increment multiple days', () => {
      const date = new Date('2019-12-24');
      const threeDaysLater = addDays(date, 3);

      expect(threeDaysLater).toEqual(new Date('2019-12-27'));
    });

    it('can handle change of month', () => {
      const date = new Date('2020-01-31');
      const nextDay = addDays(date, 1);

      expect(nextDay).toEqual(new Date('2020-02-01'));
    });

    it('can handle change of year', () => {
      const date = new Date('2019-12-31');
      const nextDay = addDays(date, 1);

      expect(nextDay).toEqual(new Date('2020-01-01'));
    });
  });

  describe('getHolidays', () => {
    it('returns an empty list when year is missing', () => {
      expect(getHolidays()).toEqual([]);
    });

    it('returns correct number of holidays', () => {
      expect(getHolidays(2020).length).toEqual(16);
      expect(getHolidays(2021).length).toEqual(15);
      expect(getHolidays(2022).length).toEqual(16);
    });
  });

  describe('getNonWeekendHolidays', () => {
    it('returns non-weekend holidays', () => {
      const nonWeekendHoliday = getNonWeekendHolidays(2020)[0];
      expect(isWeekend(new Date(nonWeekendHoliday.date))).toBe(false);
    });
  });
});
