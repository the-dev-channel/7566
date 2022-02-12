CC := gcc
SRCS := src/7566.c src/commands.c
FLAGS := -shared -fPIC
LIBS := -Llib/

OUTDIR := ./bin/

all:
	mkdir -p $(OUTDIR)
	$(CC) $(FLAGS) -o $(OUTDIR)7566.so $(SRCS) $(LIBS)
