#ifndef _7566_commands_h
#define _7566_commands_h

#include "7566.h"

#include "cmd/help/help.h"
#include "cmd/about/about.h"
#include "cmd/coinflip/coinflip.h"

extern Command commands[];

extern int COMMANDS_LENGTH;
extern int COMMAND_LENGTH;

char* runCommand(int argc, char **argv, User *user);

#endif
