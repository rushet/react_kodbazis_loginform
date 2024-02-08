FOR /F "tokens=*" %%G IN ('DIR /B /AD /S *.gi*') DO RMDIR /S /Q "%%G"
