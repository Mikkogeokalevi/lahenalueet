@echo off
set "sourcedir=c:\Users\Tompe\Documents\lahen_alueet_versio2"

REM Haetaan nykyinen päivämäärä ja kellonaika YYYY-MM-DD_HH-MM-SS muotoon
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set CDATE=%%c-%%a-%%b
for /f "tokens=1-3 delims=:." %%a in ('time /t') do set CTIME=%%a-%%b-%%c
set "backupdir_name=lahen_alueet_versio2_backup_%CDATE%_%CTIME%"
set "destinationdir=c:\Users\Tompe\Documents\backupit\lahen_alueet\%backupdir_name%"

REM Tarkistetaan, onko kohdekansio olemassa ja luodaan se, jos ei ole
if not exist "%destinationdir%" (
    mkdir "%destinationdir%"
    echo Luotiin uusi varmuuskansiopolku: %destinationdir%
) else (
    echo Kohdekansio %destinationdir% on jo olemassa.
    echo Tämä ei pitäisi tapahtua, jos aikaleima toimii oikein.
    echo Voit jatkaa tai paina Ctrl+C peruuttaaksesi.
    pause
)

echo Luodaan varmuuskopio kohteesta %sourcedir% kohteeseen %destinationdir%...
xcopy "%sourcedir%" "%destinationdir%\" /E /I /H /K /Y

if %errorlevel% equ 0 (
    echo Varmuuskopiointi valmis onnistuneesti!
) else (
    echo Varmuuskopiointi epäonnistui virhekoodilla %errorlevel%.
)
echo.
pause
