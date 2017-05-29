'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  let dest = path.join(taskTarget, dirs.videos.replace(/^_/, ''));

  // Copy
  gulp.task('videos', () => {
    return gulp.src([
        path.join(dirs.source, dirs.videos, '*.{mp4,ogg,webm}'),
        path.join(dirs.source, dirs.videos, '**/*.{mp4,ogg,webm}')
      ])
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
}
