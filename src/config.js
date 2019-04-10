import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

console.log('config.js')

singleSpa.registerApplication('navbar', () => SystemJS.import('navbar!sofe'), isActive.navbar)
singleSpa.registerApplication('people', () => SystemJS.import('people!sofe'), isActive.people)
singleSpa.registerApplication('planets', () => SystemJS.import('planets!sofe'), isActive.planets)

singleSpa.start()
