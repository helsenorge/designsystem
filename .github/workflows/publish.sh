if git describe --tags | grep -E "^v0.0.1-dev.[0-9]{1,}[[:cntrl:]]*$";
then
  npm publish --tag dev --dry-run
else
  echo "Not tagged, skipping release"
fi