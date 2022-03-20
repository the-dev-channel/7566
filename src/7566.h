/**
 * 7566
 * Copyright (C) 2022 The Dev Channel, Hri7566
 *
 * Main header
 */

#ifndef _7566
#define _7566

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TRUE 1
#define FALSE 0

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

#endif
