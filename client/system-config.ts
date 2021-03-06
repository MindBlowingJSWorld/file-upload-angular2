/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
declare var System: any;

System.config({
  paths: {
    // paths serve as alias
    'npm:': 'libs/'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    'app': 'app',
    'main': 'app/main.js',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
    
    // other libraries
    'rxjs': 'npm:rxjs',
    'lodash': 'npm:lodash/lodash.js',
    'moment': 'npm:moment/min/moment.min.js',
    'ng2-bootstrap/ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
    'jquery': 'npm:jquery/dist/jquery.min.js'

    //auth0 libraries
    //'angular2-jwt': 'npm:angular2-jwt/angular2-jwt.js'
  },
  meta: {
    lodash: { format: 'amd' }
  },
  // packages tells the System loader how to load when no filename and/or no extension
  packages: {
    'app': { main: './main.js', defaultExtension: 'js' },
    'api': { defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
    //'angular2-jwt': { defaultExtension: 'js' }
    
    // barrels
    // 'app/core':   { main: 'index'},
    // 'app/models': { main: 'index'},
  }
});
