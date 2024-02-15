To visialize the DOM \
`screen.logTestingPlaygroundURL();`

Print the DOM \
`screen.debug();`

Limit the number of tests: \
`describe.only or test.only`

Setting up debugger:
1. in `package.json` add a script: 
	`react-scripts --inspect-brk test --runInBand --no-cache`
2. add a `debugger;` statement somewhere in tests or component
3. use test.only or describe.only
4. run the above script command
5. navigate to `about:inspect` in browser
