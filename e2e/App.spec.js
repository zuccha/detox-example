describe('App', () => {
  it('should type something', async () => {
    await element(by.id('hidden-input')).typeText('something');
  });
});
