#!/bin/bash

LOG_CONTEXT="${LOG_CONTEXT:-script}"
LOG_DIR="logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/${LOG_CONTEXT}_$(date +'%Y-%m-%d_%H-%M-%S').log"

log_message() {
    local level="$1"
    local message="$2"
    local timestamp=$(date +'%Y-%m-%d %H:%M:%S')
    local formatted="[$timestamp] [$level] $message"

    echo "$formatted"
    echo "$formatted" >> "$LOG_FILE"
}

log_info() {
    log_message "INFO" "$1"
}

log_error() {
    log_message "ERROR" "$1" >&2
}

export LOG_FILE
export -f log_message
export -f log_info
export -f log_error
