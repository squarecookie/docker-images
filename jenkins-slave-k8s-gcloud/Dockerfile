FROM jenkins/ssh-slave:latest

ENV PATH $PATH:/usr/local/python3/bin/
ENV PYTHONIOENCODING utf-8

RUN set -ex

RUN apt-get update && apt-get install python3.7 -y \
    && cd /usr/bin \
    && rm /usr/bin/python \
    && ln -s python3.7 python \
    && python --version

RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
RUN apt-get update && apt-get install google-cloud-sdk kubectl -y
RUN gcloud init


