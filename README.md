# WIT Test
## How to use
You can see the routes bellow

## How to test

yarn test/ npm run test

# Routes

## /calculator/plus
  fields:
    - numberOne: number
    - numberTwo: number

## /calculator/minus
  fields:
    - numberOne: number
    - numberTwo: number
    

## /calculator/divided
  fields:
    - numberOne: number
    - numberTwo: number

## /calculator/multiplied
  fields:
    - numberOne: number
    - numberTwo: number
    
# Validation Route

## /calculator/validation/:{id}
  You have to find the logId on <b>/admin/logger/list</b>
  get the id and enjoy

## csv controller
This route is to change the log save
  fields:
  - importCsv
  - cronTime

  importCsv default: false
  crontTime default '10 * * * *'

  if change importCsv to true, the same is going to save a new jsonFile with the logs
