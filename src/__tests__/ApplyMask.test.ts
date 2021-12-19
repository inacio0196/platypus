import Mask from '../index';

// Values
const cpfValue = '45213698755'
const phoneNumberNineDigits = '55213698745'
const phoneNumberEightDigits = '5521369874'

// Masks
const cpfMask = ['###.###.###-##']
const dinamicPhoneNumberMask = ['(##) #####-####', '(##) ####-####']


test('Must apply a numeric mask', () => {
  expect(Mask.apply(cpfValue, cpfMask)).toBe('452.136.987-55');
});

test('Must apply a dynamic numeric mask', () => {
  expect(Mask.apply(phoneNumberNineDigits, dinamicPhoneNumberMask)).toBe('(55) 21369-8745')
  expect(Mask.apply(phoneNumberEightDigits, dinamicPhoneNumberMask)).toBe('(55) 2136-9874')
})