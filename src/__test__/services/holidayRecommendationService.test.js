import { getHolidayRecommendations } from '../../services/holidayRecommendationService';

describe('holidayService', () => {
  describe('getHolidayRecommendations', () => {
    it('returns all holiday recommendations in given year when queried at the beginning of the year', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
          new Date('2020-01-01T00:00:00.000Z').valueOf()
        );

      const holidayRecommendations = getHolidayRecommendations(2020, 8);
      expect(holidayRecommendations.length).toEqual(10);
    });

    it('returns only the recommendations with start date that is equal to or later than current date', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
          new Date('2020-05-27T00:00:00.000Z').valueOf()
        );

      const holidayRecommendations = getHolidayRecommendations(2020, 8);

      expect(
        holidayRecommendations.every(
          (recommendation) => recommendation.startDate >= Date.now()
        )
      ).toBe(true);

      expect(holidayRecommendations.length).toEqual(5);
    });

    it('returns holiday recommendations sorted by numberOfAnnualLeaves asc', () => {
      const holidayRecommendations = getHolidayRecommendations(2020, 5);

      expect(
        holidayRecommendations.every((recommendation, index) => {
          const nextRecommendation = holidayRecommendations[index + 1];

          return (
            nextRecommendation === undefined ||
            recommendation.numberOfAnnualLeaves <=
              nextRecommendation.numberOfAnnualLeaves
          );
        })
      ).toBe(true);
    });
  });
});
