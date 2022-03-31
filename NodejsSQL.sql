-- 데이터베이스설정
show databases;    #데이터베이스생성

create database nodejs;   #데이터베이스사용

use nodejs  #(켤 때마다 실행)

#테이블 생성
create table message_member(
	email varchar(100),
    pw varchar(100),
    tel varchar(100),
	address varchar(100),
    Join_date date
);
#데이터 입력
insert into message_member values('1', '1','1');
#데이터 검색
select *from message_member;
#데이터 수정
update message_member set pw='1234' where id= '1';
#데이터 삭제
delete from message_member where email='ifnull()';
#세션 검색
select *from sessions
delete from message_member where email is NULL;