FROM jenkins/ssh-slave:latest-jdk11

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
RUN apt-get update && apt-get install google-cloud-sdk google-cloud-sdk-gke-gcloud-auth-plugin kubectl -y
RUN gcloud init

RUN apt-get update && apt-get --only-upgrade install google-cloud-sdk-kpt google-cloud-sdk-gke-gcloud-auth-plugin google-cloud-sdk-app-engine-java google-cloud-sdk-nomos google-cloud-sdk-cloud-run-proxy google-cloud-sdk-app-engine-python-extras google-cloud-sdk-app-engine-grpc google-cloud-sdk-bigtable-emulator google-cloud-sdk-minikube google-cloud-sdk-cloud-build-local google-cloud-sdk-spanner-emulator google-cloud-sdk-cbt google-cloud-sdk-anthos-auth google-cloud-sdk google-cloud-sdk-log-streaming google-cloud-sdk-enterprise-certificate-proxy google-cloud-sdk-local-extract google-cloud-sdk-skaffold google-cloud-sdk-firestore-emulator google-cloud-sdk-datastore-emulator google-cloud-sdk-config-connector google-cloud-sdk-app-engine-python google-cloud-sdk-kubectl-oidc google-cloud-sdk-package-go-module kubectl google-cloud-sdk-harbourbridge google-cloud-sdk-pubsub-emulator google-cloud-sdk-terraform-tools google-cloud-sdk-app-engine-go
RUN echo "export USE_GKE_GCLOUD_AUTH_PLUGIN=True" >> /etc/profile \
    && . /etc/profile \
    && gke-gcloud-auth-plugin --version

