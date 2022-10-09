FROM jenkins/ssh-slave:latest-jdk11

ENV PATH $PATH:/usr/local/python3/bin/
ENV PYTHONIOENCODING utf-8

RUN export USE_GKE_GCLOUD_AUTH_PLUGIN=True

RUN set -ex

RUN apt-get update && apt-get install python3.7 -y \
    && cd /usr/bin \
    && rm /usr/bin/python \
    && ln -s python3.7 python \
    && python --version

RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
RUN apt-get update && apt-get install google-cloud-sdk google-cloud-sdk-gke-gcloud-auth-plugin kubectl -y
RUN gke-gcloud-auth-plugin --version
RUN gcloud init
RUN gcloud components update


