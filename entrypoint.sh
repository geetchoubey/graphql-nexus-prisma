#!/bin/bash
set -e
if [ -z "$DATABASE_URL" ]
then
  echo -e '\033[31m Please set DATABASE_URL as -e DATABASE_URL=<> \033[0m'
  exit 1;
else
  npm start
fi