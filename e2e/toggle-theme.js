describe('Currency Converter', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should toggle theme', async () => {
    await element(by.text('Login')).tap();
    await element(by.id('toggleThemeBtn')).tap();
  });
});
