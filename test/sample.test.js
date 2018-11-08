const EC = protractor.ExpectedConditions;

describe('Rotten Tomatoes homepage', () => {
  const rtLogoImage = $('#original_rt_logo');

  it('homepage title contains expected string', async () => {
    await browser.get('https://www.rottentomatoes.com/');
    await browser.wait(EC.visibilityOf(rtLogoImage));

    const title = await browser.getTitle();

    expect(title).toContain('Movie Trailers');
  });
});
