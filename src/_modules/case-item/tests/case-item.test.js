'use strict';

import CaseItem from '../case-item';

describe('CaseItem View', function() {

  beforeEach(() => {
    this.caseItem = new CaseItem();
  });

  it('Should run a few assertions', () => {
    expect(this.caseItem);
  });

});
