BIN := ./node_modules/.bin

lint: node_modules
	@$(BIN)/standard index.js

test: node_modules lint
	node test

node_modules:
	npm install

