CC := gcc
SRCS := src/7566.c src/commands.c src/Logger.c
FLAGS := -shared -fPIC
LIBS := -Llib/

OUTDIR := ./bin/

COMMANDS := src/cmd/help/help.c src/cmd/about/about.c src/cmd/coinflip/coinflip.c

all:
	mkdir -p $(OUTDIR)
	$(CC) $(FLAGS) -o $(OUTDIR)7566.so $(SRCS) $(COMMANDS) $(LIBS)
