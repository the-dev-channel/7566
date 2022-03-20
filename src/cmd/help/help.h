#ifndef _7566_cmd_help_h
#define _7566_cmd_help_h_

#include "../../7566.h"
#include "../../commands.h"

extern int started;
static char help[256];

char* _7566_cmd_help(int argc, char** argv, User *user);

#endif
