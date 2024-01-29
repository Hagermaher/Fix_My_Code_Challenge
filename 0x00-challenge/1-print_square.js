#!/usr/bin/node
/*
    Print a square withcharacter #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

size = parseInt(process.argv[2], 10)

for (let w = 0 ; w < size ; w++) {
    for (let k = 0 ; k < size ; k++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
