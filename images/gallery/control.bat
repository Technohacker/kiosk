@echo off
echo { "files":[> control.json
for /r %%i in (*.jpg) do echo {"%%i"}, >> control.json
echo ]} >> control.json