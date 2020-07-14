describe('Currency Converter', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('currency conversion flow', async () => {
    await element(by.text('Login')).tap();
    await element(by.id('baseCurrencyBtn')).tap();
    await element(by.text('AUD')).tap();
    await element(by.id('quoteCurrencyBtn')).tap();
    await element(by.text('EUR')).tap();
    await element(by.id('fromText')).typeText('1234');
  });
});
