import {
  isWeekend,
  getPreviousWeekend,
  getNextWeekend,
  getNumberOfWeekends
} from '../../services/weekendService';

describe('weekendService', () => {
  describe('isWeekend', () => {
    it('counts Saturday as a weekend', () => {
      const date = new Date('2019-12-28');

      expect(isWeekend(date)).toBe(true);
    });

    it('counts Sunday as a weekend', () => {
      const date = new Date('2020-03-15');

      expect(isWeekend(date)).toBe(true);
    });

    it('does not count a weekday as a weekend', () => {
      const date = new Date('2020-01-01');

      expect(isWeekend(date)).toBe(false);
    });
  });

  describe('getPreviousWeekend', () => {
    it('returns the previous weekend', () => {
      expect(getPreviousWeekend('2020-01-08')).toEqual(new Date('2020-01-04'));
      expect(getPreviousWeekend('2020-01-13')).toEqual(new Date('2020-01-11'));
      expect(getPreviousWeekend('2020-01-17')).toEqual(new Date('2020-01-11'));
    });
  });

  describe('getNextWeekend', () => {
    it('returns the next weekend', () => {
      expect(getNextWeekend('2020-01-01')).toEqual(new Date('2020-01-04'));
      expect(getNextWeekend('2020-01-03')).toEqual(new Date('2020-01-04'));
      expect(getNextWeekend('2020-01-06')).toEqual(new Date('2020-01-11'));
    });
  });

  describe('getNumberOfWeekends', () => {
    describe('returns the number of weekends correctly', () => {
      it('when startDate is weekday', () => {
        expect(getNumberOfWeekends(new Date('2020-01-01'), 5)).toEqual(2);
        expect(getNumberOfWeekends(new Date('2020-01-01'), 8)).toEqual(2);
        expect(getNumberOfWeekends(new Date('2020-01-01'), 10)).toEqual(3);
        expect(getNumberOfWeekends(new Date('2020-01-01'), 11)).toEqual(4);
      });

      it('when startDate is weekend', () => {
        expect(getNumberOfWeekends(new Date('2020-01-04'), 5)).toEqual(2);
        expect(getNumberOfWeekends(new Date('2020-01-04'), 7)).toEqual(3);
        expect(getNumberOfWeekends(new Date('2020-01-04'), 8)).toEqual(4);
        expect(getNumberOfWeekends(new Date('2020-01-04'), 11)).toEqual(4);
      });
    });
  });
});
