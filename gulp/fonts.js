'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  let dest = path.join(taskTarget, dirs.fonts.replace(/^_/, ''));

  // Copy
  gulp.task('fonts', () => {
    return gulp.src([
        path.join(dirs.source, dirs.fonts, '*.{ttf,woff,woff2,otf,svg}'),
        path.join(dirs.source, dirs.fonts, '**/*.{ttf,woff,woff2,otf,svg}')
      ])
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
}
