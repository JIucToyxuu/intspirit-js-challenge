install:
	@npm install
	@./node_modules/.bin/bower install

server:
	@./node_modules/.bin/grunt server

.PHONY: install, server