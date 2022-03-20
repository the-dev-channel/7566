/***
 * 7566
 * Copyright (c) 2022 The Dev Channel, Hri7566
 *
 * Logger Module
 */

#include <stdio.h>
#include "Logger.h"

unsigned int log_flags = 0b0011;

void slog(char* str) {
    if (log_flags & LOGGER_FLAG_LOG) {
        printf("[\x1b[34m7566\x1b[0m] %s\n", str);
    }
    return;
}

void serror(char* str) {
    if (log_flags & LOGGER_FLAG_ERROR) {
        printf("[\x1b[32mERROR\x1b[0m] [\x1b[34m7566\x1b[0m] %s\n", str);
    }
    return;
}

void sdebug(char* str) {
    if (log_flags & LOGGER_FLAG_DEBUG) {
        printf("[\x1b[34mDEBUG\x1b[34m]  [\x1b[34m7566\x1b[0m] %s\n", str);
    }
    return;
}

