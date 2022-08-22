FROM jenkins/ssh-slave:alpine

# RUN set -ex
# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add gcc tar gcompat build-base

RUN wget -P /usr/local https://go.dev/dl/go1.19.linux-amd64.tar.gz
# COPY go1.19.linux-amd64.tar.gz /usr/local

RUN cd /usr/local && mkdir go

RUN tar -C /usr/local -xzf /usr/local/go1.19.linux-amd64.tar.gz

ENV PATH /usr/local/go/bin:$PATH

RUN go version


