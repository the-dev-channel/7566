/**
 * 7566
 * Ⓒ 2022 Hri7566, The Dev Channel
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "config.h"
#include "7566.h"

void init(void) {
    
    return;
}

void printAddress(void* address) {
    printf("%p\n", address);
    return;
}

void receive(char* message) {
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
    char* response = runCommand(args[0], NULL);
    printf("%s\n", response);
    
    return;
}
