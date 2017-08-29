'use strict';

import surge from 'gulp-surge';

export default function(gulp) {
  // Copy
  gulp.task('surge', [], () => {
    return surge({
      project : './build/copyToDeploy',
      domain: 'kilo-static-asset.surge.sh'
    })
  });
}
