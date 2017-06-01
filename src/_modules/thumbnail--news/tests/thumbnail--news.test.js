'use strict';

import ThumbnailNews from '../thumbnail--news';

describe('ThumbnailNews View', function() {

  beforeEach(() => {
    this.thumbnailNews = new ThumbnailNews();
  });

  it('Should run a few assertions', () => {
    expect(this.thumbnailNews);
  });

});
