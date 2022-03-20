/**
 * 7566
 * Copyright (C) 2022 The Dev Channel, Hri7566
 *
 * Commands module
 */

#include "commands.h"

Command commands[] = {
    {
        .name = "help",
        .desc = "Display help",
        .func = _7566_cmd_help
    },
    {
        .name = "about",
        .desc = "Display information about the bot",
        .func = _7566_cmd_about
    },
    {
        .name = "coinflip",
        .desc = "Flip a coin",
        .func = _7566_cmd_coinflip
    }
};

int COMMANDS_LENGTH = sizeof(commands);
int COMMAND_LENGTH = sizeof(Command);

char* runCommand(int argc, char** argv, User* user) {
    // find matching command
    char* response = "Unknown command";
    for (int i = 0; i < COMMANDS_LENGTH / COMMAND_LENGTH; i++) {
        if (strcmp(argv[0], commands[i].name) == 0) {
            response = commands[i].func(argc, argv, user);
            break;
        }
    }

    return response;
}
