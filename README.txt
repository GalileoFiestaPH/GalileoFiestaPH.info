===================
Tools of the Trade
===================

1. Node
2. Sass
3. Susy
4. Bourbon
5. Font-Awesome

===================
Install Gulp
===================

npm install --global gulp

===================
Install Bower
===================

npm install --global bower

===================
Initialize folder
===================

npm init
bower init

===================
Initialize gulp dependencies
===================

npm install --save-dep gulp
npm install --save-dep gulp-sass
npm install --save-dep gulp-sourcemaps

===================
Initialize bower dependencies
===================

bower install susy --save
bower install breakpoint-sass --save
bower install fontawesome --save
bower install bourbon --save
#Bourbon

===================
Import files for .scss
===================

@import "../../assets/components/susy/sass/susy";
@import "../../assets/components/breakpoint-sass/stylesheets/breakpoint";
@import "../../assets/components/bourbon/app/assets/stylesheets/bourbon";
@import "../../assets/components/fontawesome/scss/font-awesome";

http://www.zell-weekeat.com/gulp-libsass-with-susy/

===================
Start your htmls with
===================

html:5
