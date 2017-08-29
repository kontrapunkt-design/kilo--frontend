'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, 'copyToDeploy');

  // Copy
  gulp.task('copyToDeploy', () => {
    return gulp.src([
        path.join(dirs.destination, dirs.styles.replace(/^_/, ''), '*.css')
      , path.join(dirs.destination, dirs.scripts.replace(/^_/, ''), '*.js')
    ])
    .pipe(gulp.dest(dest));
  });
}
