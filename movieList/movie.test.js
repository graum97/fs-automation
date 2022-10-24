// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// navigate to the localhost
beforeAll(async () => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

test("Delete Movie", async () => {
    await
})

test('Add a movie' , async () => {
    await addMovie(driver)

    let searchBar = await driver.findElement(By.xpath('//input'))
    await driver.sleep(5000)
})