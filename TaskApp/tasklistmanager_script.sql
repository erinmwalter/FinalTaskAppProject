create database tasklistmanager;

create table tasks(
	taskId int not null auto_increment primary key,
    tmName varchar(30),
    taskName varchar(30),
    `description` varchar(200),
    dueDate varchar(20),
    isCompleted bit
);

insert into tasks 
values(0, 'Dwight', 'Fire Safety Training', 'The office needs to be trained', '2022-02-28', 0),
(0, 'Pam', 'Build Copier', 'Instructions are in German. Good Luck', '2022-02-28', 0);



