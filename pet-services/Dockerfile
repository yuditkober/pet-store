FROM maven:alpine as builder
COPY . /pet-store-service 
WORKDIR pet-store-service 
RUN ["mvn", "clean", "install"] 

FROM java:8-alpine 
COPY --from=builder /pet-store-service/target/pet-services-1.0.0.jar . 
ENTRYPOINT ["java", "-jar", "pet-services-1.0.0.jar"]