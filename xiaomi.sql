-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 04 月 15 日 23:25
-- 服务器版本: 5.6.21
-- PHP 版本: 5.4.34

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `xiaomi`
--

-- --------------------------------------------------------

--
-- 表的结构 `carousel`
--

CREATE TABLE IF NOT EXISTS `carousel` (
  `pid` int(8) NOT NULL AUTO_INCREMENT COMMENT '轮播图id',
  `pgid` int(8) NOT NULL COMMENT '轮播图组id',
  `url` varchar(255) NOT NULL DEFAULT '‘’' COMMENT '轮播图地址',
  `lead_to` varchar(255) NOT NULL DEFAULT '‘’' COMMENT '详情',
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `carousel`
--

INSERT INTO `carousel` (`pid`, `pgid`, `url`, `lead_to`) VALUES
(1, 1, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/01.png', '/detail/1001'),
(2, 1, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/02.jpg', '/detail/1002'),
(3, 1, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/03.jpg', '/detail/1003'),
(4, 1, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg', '/detail/1004'),
(5, 2, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/1888a9f0a6ae807113cb428b9e01f5fe.jpg', '/detail/1007'),
(6, 2, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213275295675.png', '/detail/1009'),
(7, 3, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213533255816.png', '/detail/1011'),
(8, 4, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2bf70582edb45d83d7120a22c87200c9.jpg', '/detail/1013'),
(9, 5, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png', '/detail/1014'),
(10, 7, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png', '/detail/1015'),
(11, 8, 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png', '/detail/1017');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
