#!/bin/bash
echo "Creating folder for day $1"
mkdir $1
cp .seed/* $1/
cd $1
mv starter.js $1.js
echo "You are now ready to work on day $1"