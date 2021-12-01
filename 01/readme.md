# Well this was interesting...

I got tripped up with the second part and had to resort to console logging everything until I found the issue.

The result I was looking for was:

```javascript
sum = a + b + c; // 1 + 2 + 3 = 6
```

But the result I was getting was:

```javascript
sum = a + b + c; // 1 + 2 + 3 = 123
```

And it clicked for me that JS was concatenating the strings rather than adding them together like I wanted. I ended up using ParseInt to make sure the value was seen as a number so that the "+" operation would actually add them together. Tripped me up for a little while but it's a learning experience that's for sure!

### TODO

- [x] Don't forget to check if you expect it's a number that it's actually a number!
