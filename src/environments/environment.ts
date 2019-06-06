// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://192.168.5.241:8080/rc_onboard',
 img_url: 'http://192.168.5.241:8080/rc_onboard',
  // api_url: 'http://192.168.5.200:5050/rc_onboard',
  // img_url: 'http://192.168.5.200:5050/rc7',
  imgsize: 1000000,
  timelimit: 3000
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.