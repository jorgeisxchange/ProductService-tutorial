FROM maven:3.3.3-jdk-8
MAINTAINER jorge interno

WORKDIR /code

EXPOSE 8081

CMD ["mvn","spring-boot:run"]