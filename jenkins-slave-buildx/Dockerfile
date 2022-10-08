FROM jenkins/ssh-slave:latest-jdk11

# https://github.com/docker/buildx/issues/493
# https://github.com/tonistiigi/binfmt
RUN docker run --privileged --rm tonistiigi/binfmt --install all

RUN apt-get update && curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

## https://github.com/docker/buildx/issues/493
## https://github.com/tonistiigi/binfmt
#RUN docker run --privileged --rm tonistiigi/binfmt --install all