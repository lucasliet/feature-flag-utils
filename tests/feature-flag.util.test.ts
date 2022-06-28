import * as FeatureFlagUtil from '../src/feature-flag.util';

afterEach(() => {
  jest.spyOn(global.Math, 'round').mockRestore();
});

describe('Mock Results', () => {
  it('should return the mocked Math.round value', () => {
    jest.spyOn(global.Math, 'round').mockReturnValue(60);

    expect(Math.round(Math.random() * 100)).toBe(60);

    jest.spyOn(global.Math, 'round').mockRestore();
    jest.spyOn(global.Math, 'round').mockReturnValue(45);

    expect(Math.round(Math.random() * 100)).toBe(45);
  });
});

describe('Whitelist Companies', () => {
  it('should return true if the company is listed in the list of companies to be on the new feature', () => {
    const companies = ['12345678901234', '12345678901235'];
    const company = '12345678901234';
    expect(FeatureFlagUtil.isCompanyListed(companies, company)).toBe(true);
  });

  it('should return false if the company is not listed in the list of companies to be on the new feature', () => {
    const companies = ['12345678901234', '12345678901235'];
    const company = '12345678901236';
    expect(FeatureFlagUtil.isCompanyListed(companies, company)).toBe(false);
  });

  it('should return true if the company is listed in the list of companies to be on the new feature as number', () => {
    const companies = ['02345678901234', '12345678901235'];
    const company = 2345678901234;
    expect(FeatureFlagUtil.isCompanyListed(companies, company)).toBe(true);
  });

  it('should return false if the company is not listed in the list of companies to be on the new feature as number', () => {
    const companies = ['02345678901234', '12345678901235'];
    const company = 2345678901236;
    expect(FeatureFlagUtil.isCompanyListed(companies, company)).toBe(false);
  });
});

describe('Random Percentage', () => {
  it('should return true if the percentage is between 0 and 100, and then generates a random number in that range to check if it is less than the percentage', () => {
    jest.spyOn(global.Math, 'round').mockReturnValue(50);
    const percentage = 60;
    expect(FeatureFlagUtil.isRandomInPercentage(percentage)).toBe(true);
  });

  it('should return true if the percentage is between 0 and 100, and then generates a random number in that range to check if it is equal than the percentage', () => {
    jest.spyOn(global.Math, 'round').mockReturnValue(50);
    const percentage = 50;
    expect(FeatureFlagUtil.isRandomInPercentage(percentage)).toBe(true);
  });

  it('should return false if the random number generated is greater than the percentage', () => {
    jest.spyOn(global.Math, 'round').mockReturnValue(50);
    const percentage = 45;
    expect(FeatureFlagUtil.isRandomInPercentage(percentage)).toBe(false);
  });

  it('should return false if the percentage is zero', () => {
    const percentage = 0;
    expect(FeatureFlagUtil.isRandomInPercentage(percentage)).toBe(false);
  });

  it('should return false if the percentage is negative', () => {
    const percentage = -1;
    expect(FeatureFlagUtil.isRandomInPercentage(percentage)).toBe(false);
  });

  it('should return false if the percentage is greater than 100', () => {
    const percentage = 101;
    expect(FeatureFlagUtil.isRandomInPercentage(percentage)).toBe(false);
  });
});