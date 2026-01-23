#!/bin/bash

ENV_FILE="./apps/contract/.env"
LOG_CONTEXT="deploy"

source "scripts/logger.sh"

if [ -f "$ENV_FILE" ]; then
    log_info "Loading environment variables from $ENV_FILE"
    set -o allexport
    source "$ENV_FILE"
    set +o allexport
    log_info "Environment variables loaded."
else
    log_error "Error: .env file not found at $ENV_FILE"
    exit 1
fi

if [ -z "$ETHER_SCAN_API_KEY" ]; then
    log_error "Error: ETHER_SCAN_API_KEY is not set or empty."
    exit 1
fi

log_info "Starting deployment..."

forge script Deploy \
    --root apps/contract \
    --broadcast \
    -vvv \
    --verify \
    --verifier etherscan \
    --etherscan-api-key "$ETHER_SCAN_API_KEY" 2>&1 | tee -a "$LOG_FILE"

EXIT_CODE=${PIPESTATUS[0]}

if [ $EXIT_CODE -eq 0 ]; then
    log_info "Deployment finished successfully."
else
    log_error "Deployment failed with exit code $EXIT_CODE."
    exit $EXIT_CODE
fi
