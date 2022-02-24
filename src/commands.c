#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "7566.h"

char* cmd_about(int argc, char** argv, User *user) {
    return "Ⓒ 2022 Hri7566, The Dev Channel";
}

char* cmd_help(int argc, char** argv, User *user) {
    return "WIP";
}

char* cmd_usertest(int argc, char** argv, User *user) {
    char response[100];
    sprintf(response, "Name: %s | ID: %s", user->name, user->id);
    return response;
}

Command CMD_ABOUT = {
    .name = "about",
    .desc = "Ⓒ 2022 Hri7566, The Dev Channel",
    .func = &cmd_about
};

Command CMD_HELP = {
    .name = "help",
    .desc = "Prints this help message",
    .func = &cmd_help
};

Command CMD_USERTEST = {
    .name = "usertest",
    .desc = "Prints the user's name and ID",
    .func = &cmd_usertest
};

Command* commands[] = {
    &CMD_ABOUT,
    &CMD_HELP,
    &CMD_USERTEST
};

char* runCommand(char* cmd, User *user) {
    for (int i = 0; i < sizeof(commands) / sizeof(Command*); i++) {
        if (strcmp(cmd, commands[i]->name) == 0) {
            return commands[i]->func(0, NULL, user);
        }
    }
    return "";
}
