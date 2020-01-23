# TsumTsumShop
A Full Stack LAMP & React single-page eccomerce application where you can shop for Disney Tsum Tsum products!

# Preview
![](/server/public/images-tsum-tsum/tsumtsumshoppreview.gif)
=======
  A Disney Themed ecommerce website where you can purchase Tsum Tsum Products! 

# Technologies Used
  1 - React
  2 - PHP
  3 - MySql & SQL
  4 - Bootstrap 4
  5 - Apache2, Webpack 
  6 - Ubuntu Server (For Testing)
  7 - jQuery

# Features
  1 - User can add view Products
  2 - User can view Product Details
  3 - User can add Products to Cart
  4 - User can view Cart Summary
  5 - User can Place Order
  6 - User can Review Order Summary

# Preview 
![](/server/public/images-tsum-tsum/tsumtsumshoppreview.gif)

# Try out the Application!

  <br /> 1) Clone repository <br />
    ```
    git clone https://github.com/Noelcarino/TsumTsumShop.git
    ```

  <br />2) Install all dependencies in `package.json` with NPM <br />
    ```
    npm install
    ```
  
  <br />3) Copy the provided config file `TsumTsumShop.local.conf` to `/etc/apache2/sites-available`. <br />
    ```
    sudo cp server/TsumTsumShop.local.conf /etc/apache2/sites-available
    ```
    
  <br /> 4) Enable Application <br />
    ```
    sudo a2ensite tsumtsumshop.localhost
    ```
    
  <br /> 5) Restart the Apache web server <br />
    ```
    sudo service apache2 restart
    ```
    
  <br /> 6) Start `webpack-dev-server` by running provided`"dev"` script in `packace.json`. <br />
    ```
    npm run dev
    ```
