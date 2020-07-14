describe('Currency Converter', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should logout', async () => {
    await element(by.text('Login')).tap();
    await element(by.id('optionsBtn')).tap();
    await element(by.text('Logout')).tap();
  });
});
