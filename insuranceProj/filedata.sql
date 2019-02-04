LOAD DATA LOCAL INFILE '‎⁨/tmp/alaskaData.txt' INTO TABLE datatest
FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'
(@col1,@col2,@col3,@col4) set state=@col1,href=@col2,text=@col3,description=@col4;