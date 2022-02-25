#include <stdio.h>
#include "Logger.h"

void slog(char* str) {
    printf("[\x1b[34m7566\x1b[0m] %s\n", str);
    return;
}

void serror(char* str) {
    printf("[\x1b[32mERROR\x1b[0m] [\x1b[34m7566\x1b[0m] %s\n", str);
    return;
}

void sdebug(char* str) {
    printf("[\x1b[34mDEBUG\x1b[34m]  [\x1b[34m7566\x1b[0m] %s\n", str);
    return;
}
