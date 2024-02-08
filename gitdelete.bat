FOR /F "tokens=*" %%G IN ('DIR /B /AD /S *.g*') DO RMDIR /S /Q "%%G"
