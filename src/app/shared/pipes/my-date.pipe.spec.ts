import { values } from 'cypress/types/lodash';
import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe;

  beforeEach(() => {
    pipe = new MyDatePipe();
  });

  it('create an instance', () => {
    const pipe = new MyDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('i should return empty string for falsy values', () => {
    [0, false, NaN, "", null, undefined].forEach( (x) => {
      expect(pipe.transform(x)).toEqual('');
    })
    
  })

  it('should return empty string for non-Date value', () => {
    [[], {}].forEach((x) => {
      expect(pipe.transform(x)).toEqual('');
    })
  })

  it('should return proper date for date string', () => {
    const input = new Date('2022-06-09 10:22:45');
      expect(pipe.transform(input)).toEqual('9 czerwca 2022, 10:22');
    })  

});
