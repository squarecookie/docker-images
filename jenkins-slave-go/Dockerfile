FROM jenkins/ssh-slave:latest-jdk11

ENV PATH /usr/local/go/bin:$PATH

# RUN set -ex
# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
#RUN apt-get update && apt-get install gcc tar gcompat build-base
RUN apt-get update && apt-get install -y build-essential

RUN wget -P /usr/local https://go.dev/dl/go1.19.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf /usr/local/go1.19.linux-amd64.tar.gz \
    && go version


