-- 데이터베이스설정
show databases;    #데이터베이스생성

create database CAMP;   #데이터베이스사용

use CAMP  #(켤 때마다 실행)

#테이블 생성
create table message_member(
	CAMP_NAME varchar(100),
    CATEGORY varchar(100),
    LATITUDE varchar(100),
	LONGITUDE varchar(100),
    ADDRESS date
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