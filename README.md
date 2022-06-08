# Nyayomat-ACP-Mobile-App

Project Overview

Nyayomat ACP (Nyayomat Boost) is built alongside an e-commerce platform whereby merchants are connected to partners (Asset Providers) through the ACP. The platform acts as an intermediary between micro, small and medium-sized merchants and asset providers to facilitate asset/working capital financing between the counterparties.

The Mobile application available in android and ios versions is used by merchants as an alternative avenue to interact with the platform.  

The file directory is as follows: 

- Bundle

- Tests

- Android

- ios

- src

- LICENSE

- README.md

The code base includes both the design and api call outs. As such, the unit tests shall primarliy be based on api's and their web interaction. 

To perform unit tests, 

Download ZIP the code repo - Nyayomat-Web_Production-Environment or Nyayomat-Web--Development-Environ

Install xampp on your pc with php 7.4 version.

If you have installed xampp on your pc, then go to your xampp/htdocs directory.

Under this directory you need to unzip the code file you had downloaded earlier. 

Create two db’s.

Import the db provided into your phpmyadmin on your localhost.


Once import is successfully done, go to your project directory and open .env file and change

DB_DATABASE= your_db_name

DB_USERNAME=

DB_PASSWORD= 


TESTING_DB_DATABASE=your_db_name

TESTING_DB_USERNAME=root

TESTING_DB_PASSWORD=

The default password is empty on localhost.


Proceed to cmd.

Go to project directory and thereafter;

Mobile API Test Cases

•	vendor/bin/phpunit tests/Feature/ACP/MobileApp/AssetTest.php

•	vendor/bin/phpunit tests/Feature/ACP/MobileApp/LocationTest.php

•	vendor/bin/phpunit tests/Feature/ACP/MobileApp/PayTest.php

•	vendor/bin/phpunit tests/Feature/ACP/MobileApp/ProductCatalogTest.php

•	vendor/bin/phpunit tests/Feature/ACP/MobileApp/RegisterTest.php

•	vendor/bin/phpunit tests/Feature/ACP/MobileApp/Transaction.php


