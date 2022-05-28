CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `account` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户信息表';

SELECT * FROM `user` WHERE account = '15202478284' AND password = '123';

SELECT id, name, account FROM `user`;

INSERT INTO `user` (`name`, `password`) VALUES ('赵六', MD5('chenshuo'));

UPDATE `user` SET account = '15202478287' WHERE id = 4;