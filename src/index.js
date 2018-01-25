#!/usr/bin/env node
// @flow

console.log('Hello, world! 2');

function square(n: number): number {
  return n * n;
}

square("2"); // Error!
