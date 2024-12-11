# Unexpected Null Return in Addition Function

This repository demonstrates a common error in JavaScript where a function returns `null` prematurely when it could have returned a valid result.  The `foo` function is intended to add two numbers but incorrectly returns `null` if either input is `null`, even if one is a valid number.  The solution demonstrates how to avoid this by handling `null` values appropriately.

## Bug

The bug is in the `foo` function which should return the sum of two numbers, but it returns `null` if either argument is `null`.