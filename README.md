# KPI-WEB

KPI Web is a reporting webpage that fetch data in KPI API and serialize it into intelligible diagrams.
This app is destinated to April's projects (BMKP,RMKP) for management purposes.
KPI Web is an Angular application.


## Targeted versions
* [Angular CLI](https://github.com/angular/angular-cli): 10.0.0.
* NodeJS: 10.19.0+

## Requirements

To run the app you must install the following packages :

```shell script
sudo apt install nodejs
npm install -g @angular/cli
```

## Installation

You first have to clone the project to your local repository :

```shell script
git clone URL
```
Then you must enter the following commands in the main directory to install dependencies and run the project : 

```shell script
npm install
npm run start:dev
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
The app works with a reverse proxy (nginx) running on `http://localhost`


## Authors
* **Benjamin Kermani** - *Initial work* [Intern at @Neo9](https://github.com/b3nker)

## License/Copyright
[@Neo9](https://neo9.fr/)