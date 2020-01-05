SHELL:=/bin/bash

# requires >=19.* version of docker to use buildkit
export DOCKER_BUILDKIT=1
# requires docker-compose >= 1.25.0 version to use buildkit
export COMPOSE_DOCKER_CLI_BUILD=1

build:
	docker build -t base . -f Dockerfile

test: 
	docker-compose run --rm test
