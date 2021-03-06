// add some helpful assertions
// doing this locally will remove type problems
// import '@testing-library/jest-dom/extend-expect'

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}

// Courtesy of https://github.com/testing-library/react-testing-library/issues/281#issuecomment-480349256
// const originalError = console.error
//
// beforeAll(() => {
//   console.error = (...args) => {
//     if (/Warning.*not wrapped in act/.test(args[0])) {
//       return
//     }
//     originalError.call(console, ...args)
//   }
// })
//
// afterAll(() => {
//   console.error = originalError
// })
