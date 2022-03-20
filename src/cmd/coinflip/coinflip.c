#include "coinflip.h"

char* heads = "The coin landed on heads!";
char* tails = "The coin landed on tails!";

char* _7566_cmd_coinflip(int argc, char** argv, User *user) {
    char* response = tails;
    if (rand() % 2 == 0) {
        response = heads;
    }
    return response;
}
