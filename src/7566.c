/**
 * 7566
 * Ⓒ 2022 Hri7566, The Dev Channel
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "config.h"
#include "7566.h"
#include "Logger.h"

void init(void) {
    printf("\x1b[42m\x1b[30m                                    \x1b[0m\n\x1b[42m\x1b[30m ███████╗███████╗ ██████╗  ██████╗  \x1b[0m\n\x1b[42m\x1b[30m ╚════██║██╔════╝██╔════╝ ██╔════╝  \x1b[0m\n\x1b[42m\x1b[30m     ██╔╝███████╗███████╗ ███████╗  \x1b[0m\n\x1b[42m\x1b[30m    ██╔╝ ╚════██║██╔═══██╗██╔═══██╗ \x1b[0m\n\x1b[42m\x1b[30m    ██║  ███████║╚██████╔╝╚██████╔╝ \x1b[0m\n\x1b[42m\x1b[30m    ╚═╝  ╚══════╝ ╚═════╝  ╚═════╝  \x1b[0m\n\x1b[42m\x1b[30m                                    \x1b[0m\n\n");
    slog("Initialization complete.");
    slog("Copyright (c) 2022 Hri7566, The Dev Channel");
    return;
}

void printAddress(void* address) {
    printf("%p\n", address);
    return;
}

char* receive(char* message, User* user) {
    // string to array
    char* args[10];
    int argc = 0;
    char* arg = strtok(message, " ");
    while (arg != NULL) {
        args[argc] = arg;
        argc++;
        arg = strtok(NULL, " ");
    }

    // run command
    char* response = runCommand(args[0], user);
    // printf("%s\n", response);
    
    return response;
}
