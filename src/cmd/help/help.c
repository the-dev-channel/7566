#include "help.h"

int started = FALSE;

char* _7566_cmd_help(int argc, char** argv, User *user) {
    if (started == FALSE) {
        started = TRUE;
        strcat(help, "Commands: ");
        for (int i = 0; i < COMMANDS_LENGTH / COMMAND_LENGTH; i++) {
            strcat(help, commands[i].name);
            strcat(help, ", ");
        }
        help[strlen(help) - 2] = '\0';
    }

    return help;
}
