# JavaScript Function with Unexpected NaN Handling

This repository demonstrates a common JavaScript bug that involves the improper handling of `NaN` (Not a Number) values in conditional statements. 

The `foo` function intends to classify input numbers as zero, negative or positive. However, its behavior is flawed when dealing with `NaN`, which leads to an unexpected return value of 1. The solution includes a refined approach to check for `NaN` explicitly.

## Bug Description:
The primary issue lies in the conditional statement's handling of NaN. Since NaN does not follow standard numerical comparison rules, the condition `x < 0` always returns `false` when `x` is NaN, resulting in the function returning 1 incorrectly.  The improved version handles this edge case, providing more robust and predictable behavior.

## Solution:
The solution incorporates an explicit check for `NaN` using `isNaN()`, ensuring correct identification and handling of this special numeric value.