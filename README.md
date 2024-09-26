# 2023-wcp

**Live demo** https://unctad-infovis.github.io/2023-wcp/

## Rights of usage

Contact Teemo Tebest.

## How to update

* See folder [Google Drive folder](https://drive.google.com/drive/u/0/folders/1kWLjaDW9EWkY-s_OEAPg6p85Rg1kCJj9)
  * Replace new data in [Google Drive](https://docs.google.com/spreadsheets/d/1Ndu4zsgcfDLRPR6NLZYJ9RSImLITs_LotuwJDmoL-B8/edit?gid=597152891#gid=597152891) file
    * Keep the heading row
  * Download the file and convert the `.csv` file to `.json` and update the 2022-wcp project so the flags-animation gets updated. Use [Mr Data Converter](https://shancarter.github.io/mr-data-converter/)
    * Use `JSON - properties`
* Copy paste to replace all the charts in Datawrapper
  * Datawrapper data is in [Google Drive](https://docs.google.com/spreadsheets/d/1tenPbzTOAlwrUZwRnvOdG5MV3LzK7ecsGmMpOHWW8RM/edit?gid=743131870#gid=743131870) and the charts in [Datawrapper](https://app.datawrapper.de/archive/team/unctad/173122)
  * Remember to update the legend in the maps
* Make sure the topics data is up-to-date 

## How to build and develop

This is a Webpack + React project.

* `npm install`
* `npm start`

Project should start at: http://localhost:8080

For developing please refer to `package.json`