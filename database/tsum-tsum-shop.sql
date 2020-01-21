-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 21, 2020 at 11:27 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tsum-tsum-shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(1, '2020-01-20 07:02:03');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customerInfo`
--

DROP TABLE IF EXISTS `customerInfo`;
CREATE TABLE `customerInfo` (
  `id` int(25) UNSIGNED NOT NULL,
  `cartID` int(25) NOT NULL,
  `customerName` varchar(500) NOT NULL,
  `customerCreditCard` varchar(255) NOT NULL,
  `customerShippingAddress` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerInfo`
--

INSERT INTO `customerInfo` (`id`, `cartID`, `customerName`, `customerCreditCard`, `customerShippingAddress`) VALUES
(1, 1, 'Alien Toy Story', '8383838383838888', 'Alien Toy Story Avenue $74.95'),
(2, 1, 'Alien', '1234123412341234', 'Alien Avenue $74.95'),
(3, 1, 'Noel Carino', '1292929292929292', '7 Leaves Avenue'),
(4, 1, 'Noel C', '1234123434342123', 'Long beach ave'),
(5, 1, 'Noel C', '1234343434312345', 'Home Avenue'),
(6, 1, 'Noel Carino', '1234123412341234', 'LFZ Avenue'),
(7, 1, 'Noel', '1234123412341234', 'LFZ avenue'),
(8, 1, 'Noel', '1234123412341234', 'Irvine Spectrum Drive'),
(9, 1, 'Noel Carino', '1234123412341234', 'LFZ Ave'),
(10, 1, 'Noel Carino', '1234123412341234', 'Irvine Spectrum Dr');

-- --------------------------------------------------------

--
-- Table structure for table `disney-images-folder`
--

DROP TABLE IF EXISTS `disney-images-folder`;
CREATE TABLE `disney-images-folder` (
  `id` int(55) UNSIGNED NOT NULL,
  `image_id` int(55) UNSIGNED NOT NULL,
  `image_folder` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disney-images-folder`
--

INSERT INTO `disney-images-folder` (`id`, `image_id`, `image_folder`) VALUES
(1, 1, '/images-tsum-tsum/buzzlightyear-plush.jpg'),
(2, 1, '/images-tsum-tsum/buzz-2.jpg'),
(3, 1, '/images-tsum-tsum/buzz-3.jpg'),
(4, 1, '/images-tsum-tsum/buzz-4.jpg'),
(5, 1, '/images-tsum-tsum/buzz-5.jpg'),
(6, 1, '/images-tsum-tsum/buzz-6.jpg'),
(7, 2, '/images-tsum-tsum/alien-plush.jpg'),
(8, 2, '/images-tsum-tsum/alien-2.jpg'),
(9, 2, '/images-tsum-tsum/alien-3.jpg'),
(10, 2, '/images-tsum-tsum/alien-4.jpg'),
(11, 2, '/images-tsum-tsum/alien-5.jpg'),
(12, 2, '/images-tsum-tsum/alien-6.jpg'),
(13, 3, '/images-tsum-tsum/angel-plush.jpg'),
(14, 3, '/images-tsum-tsum/angel-2.jpg'),
(15, 3, '/images-tsum-tsum/angel-3.jpg'),
(16, 3, '/images-tsum-tsum/angel-4.jpg'),
(17, 3, '/images-tsum-tsum/angel-5.jpg'),
(18, 3, '/images-tsum-tsum/angel-6.jpg'),
(19, 4, '/images-tsum-tsum/baymax-plush.jpg'),
(20, 4, '/images-tsum-tsum/baymax-2.jpg'),
(21, 4, '/images-tsum-tsum/baymax-3.jpg'),
(22, 4, '/images-tsum-tsum/baymax-4.jpg'),
(23, 4, '/images-tsum-tsum/baymax-5.jpg'),
(24, 4, '/images-tsum-tsum/baymax-6.jpg'),
(25, 5, '/images-tsum-tsum/mickey-plush.jpg'),
(26, 5, '/images-tsum-tsum/mickey-2.jpg'),
(27, 5, '/images-tsum-tsum/mickey-3.jpg'),
(28, 5, '/images-tsum-tsum/mickey-4.jpg'),
(29, 5, '/images-tsum-tsum/mickey-5.jpg'),
(30, 5, '/images-tsum-tsum/mickey-6.jpg'),
(31, 6, '/images-tsum-tsum/minnie-plush.jpg'),
(32, 6, '/images-tsum-tsum/minnie-2.jpg'),
(33, 6, '/images-tsum-tsum/minnie-3.jpg'),
(34, 6, '/images-tsum-tsum/minnie-4.jpg'),
(35, 6, '/images-tsum-tsum/minnie-5.jpg'),
(36, 6, '/images-tsum-tsum/minnie-6.jpg'),
(37, 7, '/images-tsum-tsum/donald-plush.jpg'),
(38, 7, '/images-tsum-tsum/donald-2.jpg'),
(39, 7, '/images-tsum-tsum/donald-3.jpg'),
(40, 7, '/images-tsum-tsum/donald-4.jpg'),
(41, 7, '/images-tsum-tsum/donald-5.jpg'),
(42, 7, '/images-tsum-tsum/donald-6.jpg'),
(43, 8, '/images-tsum-tsum/pluto-plush.jpg'),
(44, 8, '/images-tsum-tsum/pluto-2.jpg'),
(45, 8, '/images-tsum-tsum/pluto-3.jpg'),
(46, 8, '/images-tsum-tsum/pluto-4.jpg'),
(47, 8, '/images-tsum-tsum/pluto-5.jpg'),
(48, 8, '/images-tsum-tsum/pluto-6.jpg'),
(49, 9, '/images-tsum-tsum/stitch-plush.jpg'),
(50, 9, '/images-tsum-tsum/stitch-2.jpg'),
(51, 9, '/images-tsum-tsum/stitch-3.jpg'),
(52, 9, '/images-tsum-tsum/stitch-4.jpg'),
(53, 9, '/images-tsum-tsum/stitch-5.jpg'),
(54, 9, '/images-tsum-tsum/stitch-6.jpg'),
(55, 10, '/images-tsum-tsum/daisy-plush.jpg'),
(56, 10, '/images-tsum-tsum/daisy-2.jpg'),
(57, 10, '/images-tsum-tsum/daisy-3.jpg'),
(58, 10, '/images-tsum-tsum/daisy-4.jpg'),
(59, 10, '/images-tsum-tsum/daisy-5.jpg'),
(60, 10, '/images-tsum-tsum/daisy-6.jpg'),
(61, 11, '/images-tsum-tsum/woody-plush.jpg'),
(62, 11, '/images-tsum-tsum/woody-2.jpg'),
(63, 11, '/images-tsum-tsum/woody-3.jpg'),
(64, 11, '/images-tsum-tsum/woody-4.jpg'),
(65, 11, '/images-tsum-tsum/woody-5.jpg'),
(66, 11, '/images-tsum-tsum/woody-6.jpg'),
(67, 12, '/images-tsum-tsum/goofy-plush.jpg'),
(68, 12, '/images-tsum-tsum/goofy-2.jpg'),
(69, 12, '/images-tsum-tsum/goofy-3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `disney-products`
--

DROP TABLE IF EXISTS `disney-products`;
CREATE TABLE `disney-products` (
  `id` int(55) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` mediumint(155) NOT NULL,
  `image` longtext NOT NULL,
  `shortDescription` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disney-products`
--

INSERT INTO `disney-products` (`id`, `name`, `price`, `image`, `shortDescription`) VALUES
(1, 'Buzz Lightyear', 1099, '/images-tsum-tsum/buzzlightyear-plush.jpg', 'Beyond infinity! Disney/Pixar\'s most adorable characters are now cuter than ever with our Mini \'Tsum Tsum\' Plush Collection. Stackably soft, collect Space Ranger Buzz and his entire Toy Story crew, each sold separately, for your own toybox.'),
(2, 'Alien', 1499, '/images-tsum-tsum/alien-plush.jpg', 'Beam me up! Disney/Pixar\'s most adorable characters are now cuter than ever with our Mini \"Tsum Tsum\" Plush Collection. Stackably soft, collect the little green Alien and his entire Toy Story crew, each sold separately, for your own toybox.'),
(3, 'Angel', 999, '/images-tsum-tsum/angel-plush.jpg', 'Mini \"Tsum Tsum\" plush Embroidered features Soft, squeezable fill with beans in belly Fuzzy plush texturing One of six Lilo & Stitch \"Tsum Tsum\".'),
(4, 'Baymax', 1149, '/images-tsum-tsum/baymax-plush.jpg', 'Tsum Tsums are cute plush characters that are cylindrical in shape, with their faces at one end. The mini ones come with a keychain to hang on a backpack or even a belt loop! Tsum Tsum, meaning \"Stack Stack\" in Japanese, is the latest explosion of cute and cuddly plush soft toys to be sold at the Japanese Disney Stores. The idea is that these small plushes can be stacked on top of one another to create limitless combinations of great mountains of adorable fuzzy Disney friends that simply ooze cuteness! Stackable, huggable and simply adorable, Tsum Tsums everywhere are waiting to be adopted! What are you waiting for?!'),
(5, 'Mickey Mouse', 1189, '/images-tsum-tsum/mickey-plush.jpg', 'Tsum Tsums are cute plush characters that are cylindrical in shape, with their faces at one end. The mini ones come with a keychain to hang on a backpack or even a belt loop! Tsum Tsum, meaning \"Stack Stack\" in Japanese, is the latest explosion of cute and cuddly plush soft toys to be sold at the Japanese Disney Stores. The idea is that these small plushes can be stacked on top of one another to create limitless combinations of great mountains of adorable fuzzy Disney friends that simply ooze cuteness! Stackable, huggable and simply adorable, Tsum Tsums everywhere are waiting to be adopted! What are you waiting for?!'),
(6, 'Minnie Mouse', 1189, '/images-tsum-tsum/minnie-plush.jpg', 'Tsum Tsums are cute plush characters that are cylindrical in shape, with their faces at one end. The mini ones come with a keychain to hang on a backpack or even a belt loop! Tsum Tsum, meaning \"Stack Stack\" in Japanese, is the latest explosion of cute and cuddly plush soft toys to be sold at the Japanese Disney Stores. The idea is that these small plushes can be stacked on top of one another to create limitless combinations of great mountains of adorable fuzzy Disney friends that simply ooze cuteness! Stackable, huggable and simply adorable, Tsum Tsums everywhere are waiting to be adopted! What are you waiting for?!'),
(7, 'Donald Duck', 999, '/images-tsum-tsum/donald-plush.jpg', 'Lucky ducklingDisney\'s cutest characters are cuter than ever with our Mini \"Tsum Tsum\" Plush Collection. Already a hit in Japan, now you can collect little Donald and all his soft, stackable friends in North America, each sold separately.Originally from Japan, these \"Tsum Tsum\" stackable plush come in all your favorite Disney characters. Collect them all to build a tower of cute and cuddly friends.- Mini \"Tsum Tsum\" plush- Embroidered features- Soft, squeezable fill with beans in belly- Fuzzy plush texturing- Donald is plussed with soft sailor hat, bill, and bow- Match to our Daisy Duck \"Tsum Tsum\" Plush - Mini - 3 1/2\'\', sold separately'),
(8, 'Pluto', 1499, '/images-tsum-tsum/pluto-plush.jpg', 'Pocket pooch! Disney\'s cutest characters are cuter than ever with our Mini \"Tsum Tsum\" Plush Collection. Already a hit in Japan, now you can collect pup Pluto and all his soft, stackable friends in North America, each sold separately.\r\n\r\n'),
(9, 'Stitch', 1189, '/images-tsum-tsum/stitch-plush.jpg', 'Cosmic cutie! Disney\'s cutest characters are cuter than ever with our Mini \"Tsum Tsum\" Plush Collection. Already a hit in Japan, now you can collect little alien Stitch and his soft, stackable friends in North America, each sold separately.'),
(10, 'Daisy Duck', 999, '/images-tsum-tsum/daisy-plush.jpg', 'Crazy over Daisy! Disney\'s cutest characters are cuter than ever with our Mini \"Tsum Tsum\" Plush Collection. Already a hit in Japan, now you can collect ducky little Daisy and all her soft, stackable friends in North America, each sold separately.'),
(11, 'Woody', 1189, '/images-tsum-tsum/woody-plush.jpg', 'Friend indeed! Disney/Pixar\'s most adorable characters are now cuter than ever with our Mini \"Tsum Tsum\" Plush Collection. Stackably soft, collect Sheriff Woody and his entire Toy Story posse, each sold separately, for your own toybox.'),
(12, 'Goofy', 1189, '/images-tsum-tsum/goofy-plush.jpg', 'Tsum Tsums are cute plush characters that are cylindrical in shape, with their faces at one end. The mini ones come with a keychain to hang on a backpack or even a belt loop! Tsum Tsum, meaning \"Stack Stack\" in Japanese, is the latest explosion of cute and cuddly plush soft toys to be sold at the Japanese Disney Stores. The idea is that these small plushes can be stacked on top of one another to create limitless combinations of great mountains of adorable fuzzy Disney friends that simply ooze cuteness! Stackable, huggable and simply adorable, Tsum Tsums everywhere are waiting to be adopted! What are you waiting for?!');

-- --------------------------------------------------------

--
-- Table structure for table `purchasedCartItems`
--

DROP TABLE IF EXISTS `purchasedCartItems`;
CREATE TABLE `purchasedCartItems` (
  `id` mediumint(25) UNSIGNED NOT NULL,
  `productID` mediumint(25) UNSIGNED NOT NULL,
  `count` int(15) NOT NULL,
  `price` mediumint(50) NOT NULL,
  `purchasedTimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cartID` mediumint(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `purchasedCartItems`
--

INSERT INTO `purchasedCartItems` (`id`, `productID`, `count`, `price`, `purchasedTimeStamp`, `cartID`) VALUES
(1, 2, 5, 1499, '2020-01-20 07:19:59', 1),
(2, 2, 5, 1499, '2020-01-20 07:21:47', 1),
(3, 1, 2, 1099, '2020-01-21 03:00:09', 1),
(4, 2, 1, 1499, '2020-01-21 03:00:09', 1),
(5, 11, 1, 1189, '2020-01-21 03:00:09', 1),
(6, 1, 1, 1099, '2020-01-21 06:22:10', 1),
(7, 10, 1, 999, '2020-01-21 06:22:10', 1),
(9, 2, 3, 1499, '2020-01-21 06:22:57', 1),
(10, 1, 1, 1099, '2020-01-21 18:42:04', 1),
(11, 11, 1, 1189, '2020-01-21 18:42:04', 1),
(13, 1, 1, 1099, '2020-01-21 18:44:43', 1),
(14, 11, 1, 1189, '2020-01-21 18:44:43', 1),
(16, 1, 1, 1099, '2020-01-21 19:44:56', 1),
(17, 2, 2, 1499, '2020-01-21 19:44:56', 1),
(18, 11, 1, 1189, '2020-01-21 19:44:56', 1),
(19, 1, 3, 1099, '2020-01-21 21:06:33', 1),
(20, 1, 2, 1099, '2020-01-21 21:07:35', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartproductid` (`productID`,`cartID`);

--
-- Indexes for table `customerInfo`
--
ALTER TABLE `customerInfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disney-images-folder`
--
ALTER TABLE `disney-images-folder`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `disney-products`
--
ALTER TABLE `disney-products`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `purchasedCartItems`
--
ALTER TABLE `purchasedCartItems`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `customerInfo`
--
ALTER TABLE `customerInfo`
  MODIFY `id` int(25) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `disney-images-folder`
--
ALTER TABLE `disney-images-folder`
  MODIFY `id` int(55) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT for table `disney-products`
--
ALTER TABLE `disney-products`
  MODIFY `id` int(55) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `purchasedCartItems`
--
ALTER TABLE `purchasedCartItems`
  MODIFY `id` mediumint(25) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
