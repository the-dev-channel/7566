#ifndef _7566
#define _7566

typedef struct {
    char *name;
    char _id[24];
    char id[24];
    char color[7];
} User;

typedef struct {
    char *name;
    char *desc;
    char* (*func)(int, char **, User*);
} Command;

char* runCommand(char *cmd, User *user);

#endif
