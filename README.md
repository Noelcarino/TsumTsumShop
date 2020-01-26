# TsumTsumShop
A Full Stack LAMP & React single-page ecomerce application where you can shop for Disney Tsum Tsum products!

### Preview
![](/server/public/images-tsum-tsum/tsumtsumshoppreview.gif)

### Technologies Used
  1 - React <br />
  2 - PHP <br />
  3 - MySql & SQL <br />
  4 - Bootstrap 4 <br />
  5 - Apache2, Webpack <br />
  6 - Ubuntu Server (For Testing) <br />
  7 - jQuery <br />

### Features
  1 - User can add view Products <br />
  2 - User can view Product Details <br />
  3 - User can add Products to Cart <br />
  4 - User can view Cart Summary <br />
  5 - User can Place Order<br />
  6 - User can Review Order Summary <br />

### Preview 
![](/server/public/images-tsum-tsum/tsumtsumshoppreview.gif)

### Try out the Application!

  <br />1) Clone repository <br />
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
