// A simple test to verify a visible window is opened with a title
const Application = require('spectron').Application
// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert')

const myApp = new Application({
  path: '/users/brianjacobsen/my-new-app/myApp'
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const verifyWindowIsVisibleWithTitle = async (app) => {
  await app.start()
  try {
    // Check if the window is visible
    const isVisible = await app.browserWindow.isVisible()
    // Verify the window is visible
    assert.strictEqual(isVisible, true)
    // Get the window's title
    const title = await app.client.getTitle()
    // Verify the window's title
    assert.strictEqual(title, 'My App')
  } catch (error) {
    // Log any failures
    console.error('Test failed', error.message)
  }
  // Stop the application
  await app.stop()
}

verifyWindowIsVisibleWithTitle(myApp)
