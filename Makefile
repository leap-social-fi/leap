## help: print this help message
.PHONY: help
help:
	@echo 'Usage:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/ /'

.PHONY: confirm
confirm:
	@echo -n 'Are you sure? [y/N] ' && read ans && [ $${ans:-N} = y ]

## dev: Run full development mode
.PHONY: dev dev/contract
dev:
	bun run dev
	$(MAKE) -s dev/contract

## dev/frontend: Run frontend development server
.PHONY: dev/frontend
dev/frontend:
	bun run dev:frontend

## dev/backend: Run backend development server
.PHONY: dev/backend
dev/backend:
	bun run dev:backend

## dev/contract: Run contract build for development
.PHONY: dev/contract
dev/contract:
	forge build --root apps/contract --watch

## build: Run full build
.PHONY: build
build:
	bun run build

## build/frontend: Build frontend
.PHONY: build/frontend
build/frontend:
	bun run build:frontend

## build/backend: Build backend
.PHONY: build/backend
build/backend:
	bun run build:backend

## build/contract: Build contracts
.PHONY: build/contract
build/contract:
	forge build --root apps/contract

## start: Start the application
.PHONY: start
start:
	bun run start

## test: Run all tests
.PHONY: test
test:
	bun run test

## test/contract: Run contract tests
.PHONY: test/contract
test/contract:
	forge test --root apps/contract

## fix: Run lint, format, and check
.PHONY: fix
fix:
	$(MAKE) -s lint
	$(MAKE) -s format
	$(MAKE) -s check

## lint: Run linters
.PHONY: lint lint/contract
.SILENT:
lint:
	bun run lint
	$(MAKE) -s lint/contract

## lint/frontend: Run frontend linter
.PHONY: lint/frontend
lint/frontend:
	bun run lint:frontend

## lint/backend: Run backend linter
.PHONY: lint/backend
lint/backend:
	bun run lint:backend

## lint/contract: Check contract formatting (Lint)
.PHONY: lint/contract
lint/contract:
	forge lint --root apps/contract

## format: Format code
.PHONY: format format/contract
format:
	bun run format
	$(MAKE) -s format/contract

## format/frontend: Format frontend code
.PHONY: format/frontend
format/frontend:
	bun run format:frontend

## format/backend: Format backend code
.PHONY: format/backend
format/backend:
	bun run format:backend

## format/contract: Format contract code
.PHONY: format/contract
format/contract:
	forge fmt --root apps/contract

## check: Run checks
.PHONY: check
check:
	bun run check

## check/frontend: Run frontend checks
.PHONY: check/frontend
check/frontend:
	bun run check:frontend

## check/backend: Run backend checks
.PHONY: check/backend
check/backend:
	bun run check:backend

## types: Generate/check types
.PHONY: types
types:
	bun run types

## types/frontend: Generate/check frontend types
.PHONY: types/frontend
types/frontend:
	bun run types:frontend

## types/backend: Generate/check backend types
.PHONY: types/backend
types/backend:
	bun run types:backend

## deploy/contract: Deploy contracts
.PHONY: deploy/contract
deploy/contract: confirm
	./scripts/deploy.sh
