/**
 * 7566
 * Copyright (C) 2022 The Dev Channel, Hri7566
 *
 * Logger header
 */

#ifndef _7566_LOGGER_H
#define _7566_LOGGER_H

void slog(char* str);
void serror(char* str);
void sdebug(char* str);

#define LOGGER_FLAG_LOG     0b0001
#define LOGGER_FLAG_ERROR   0b0010
#define LOGGER_FLAG_DEBUG   0b0100

#endif
