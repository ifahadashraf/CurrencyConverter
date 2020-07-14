describe('Currency Converter', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should mark a currency favourite', async () => {
    await element(by.text('Login')).tap();
    await element(by.id('baseCurrencyBtn')).tap();
    await element(by.id('AUD_fav_btn')).tap();
  });
});
