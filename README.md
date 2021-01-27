# DsBlogFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## GenerateTrustedSSL

```bash
#!bin/bash

openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout server.key \
    -new \
    -out server.crt \
    -config ./openssl-custom.cnf \
    -sha256 \
    -days 1095
```

OS X

1. Double click on the certificate (server.crt)
2. Select your desired keychain (login should suffice)
3. Add the certificate
4. Open Keychain Access if it isn't already open
5. Select the keychain you chose earlier
6. You should see the certificate localhost
7. Double click on the certificate
8. Expand Trust
9. Select the option Always Trust in When using this certificate
10. Close the certificate window

The certificate is now installed.

Windows 10

1. Double click on the certificate (server.crt)
2. Click on the button `Install Certificate …`
3. Select whether you want to store it on user level or on machine level
4. Click `Next`
5. Select `Place all certificates in the following store`
6. Click `Browse`
7. Select `Trusted Root Certification Authorities`
8. Click `Ok`
9. Click `Next`
10. Click `Finish`

If you get a prompt, click `Yes`
