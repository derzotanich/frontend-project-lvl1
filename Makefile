install: #useful to clone repository
	npm ci

brain-games: #start brain games
	node bin/brain-games.js

publish: #dry run
	npm publish --dry-run