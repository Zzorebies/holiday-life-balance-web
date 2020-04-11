import { getHolidayRecommendations } from '../holidayRecommendationService';

describe('holidayService', () => {
  describe('getHolidayRecommendations', () => {
    it('returns all holiday recommendations in given year', () => {
      const holidayRecommendations = getHolidayRecommendations(2020, 8);
      expect(holidayRecommendations.length).toEqual(6);
    });

    it('returns holiday recommendations sorted by numberOfAnnualLeaves asc', () => {
      const holidayRecommendations = getHolidayRecommendations(2020, 5);
      expect(
        holidayRecommendations[0].numberOfAnnualLeaves <=
          holidayRecommendations[1].numberOfAnnualLeaves
      ).toBe(true);
    });
  });
});
