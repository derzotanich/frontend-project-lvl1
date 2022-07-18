install: #useful to clone repository
	npm ci

brain-games: #start brain games
	node bin/brain-games.js

publish: #dry run
	npm publish --dry-run

lint: #start eslint checking
	npx eslint .

lint-fix: #start eslint checking with fixing
	npx eslint --fix .