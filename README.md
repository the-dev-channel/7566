# 7566

This project is (yet another rewrite of) 7566, a humble chat bot that supports multiple platforms, including Discord and [Multiplayer Piano](https://mppclone.com) (and its various clones, including [my own](https://mpp.hri7566.info)).

## Building

This project is programmed in JavaScript and C, so you'll need to have Node.js and a C compiler to build it. This project hasn't been tested on Windows, but it works fine on Linux. If you find a way to compile it for other platforms, you are free to submit a pull request.

### Note

The scripts in `package.json` **require** Yarn.

```bash
# using yarn:
$ yarn build # same as yarn make && npx tsc

# directly:
$ gcc -shared -fPIC -o ./bin/7566.so ./src/7566.c
$ tsc
```

## Usage

WIP

## Contributing

Pull requests are welcome. Please make sure to test your changes before merging.
