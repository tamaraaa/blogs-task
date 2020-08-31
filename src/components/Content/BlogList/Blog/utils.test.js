import { formatDate } from './utils';

test('tests date formating', () => {
    expect(formatDate("2020-08-31T19:16:04.8361283Z")).toMatchObject({date: '31.08.2020', time: "21:16"});
  });
