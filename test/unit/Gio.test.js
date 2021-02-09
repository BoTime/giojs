import { Controller } from '../../src/Gio';

jest.mock('../../src/countryInfo/CountryData', () => {
  return jest.fn().mockImplementation(() => {
    return {};
  });
});

jest.mock('../../src/countryInfo/Continent', () => {
  return jest.fn().mockImplementation(() => {
    return {};
  });
});

test('Controller', () => {
  let container = {}
  let controller = new Controller(container);
  expect(controller.init()).toBeInstanceOf(Controller);
});