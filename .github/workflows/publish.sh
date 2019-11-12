#!/bin/sh
# Have to run this in order to filter on tags due to: https://github.com/actions/bin/issues/66
if git describe --tags | grep -E "^v0.0.1-dev.[0-9]{1,}[[:cntrl:]]*$";
then
  npm publish --tag dev
else
  echo "Not tagged, skipping release"
fi