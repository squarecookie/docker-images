FROM jenkins/ssh-slave:latest-jdk11

#Dockerfile resource url: https://github.com/edwardinubuntu/flutter-web-dockerfile/blob/master/Dockerfile

WORKDIR /usr/local/apps/cereb/

# Install flutter dependencies
RUN apt-get update \
    && apt-get install -y curl git wget unzip libgconf-2-4 gdb libstdc++6 libglu1-mesa fonts-droid-fallback lib32stdc++6 python3 zip unzip \
    && apt-get clean

RUN wget https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip

RUN unzip commandlinetools-linux-8512546_latest.zip

ENV PATH $PATH:/usr/local/apps/cereb/cmdline-tools/bin/

RUN mkdir -p /usr/local/apps/cereb/android-sdk
ENV ANDROID_SDK_ROOT /usr/local/apps/cereb/android-sdk

RUN yes | sdkmanager --licenses --sdk_root="/usr/local/apps/cereb/android-sdk"
RUN yes | sdkmanager "platform-tools" "platforms;android-31" "cmdline-tools;latest" "patcher;v4" "emulator" "build-tools;29.0.2" \
    --sdk_root="/usr/local/apps/cereb/android-sdk"

ENV PATH "$PATH:/usr/local/apps/cereb/android-sdk/platform-tools"

# Clone the flutter repo
#RUN git clone https://github.com/flutter/flutter.git /usr/local/flutter -b 2.5.3
RUN git clone https://github.com/flutter/flutter.git /usr/local/flutter

# Set flutter path
ENV PATH "/usr/local/flutter/bin:/usr/local/flutter/bin/cache/dart-sdk/bin:${PATH}"

# RUN flutter config --android-sdk /usr/local/apps/cereb/android-sdk/
RUN flutter doctor -v
RUN flutter channel stable
RUN flutter upgrade
RUN flutter config --enable-web

RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
RUN apt-get update && apt-get install google-cloud-sdk kubectl -y
RUN gcloud init

RUN apt-get update && apt-get --only-upgrade install google-cloud-sdk-kpt google-cloud-sdk-gke-gcloud-auth-plugin google-cloud-sdk-app-engine-java google-cloud-sdk-nomos google-cloud-sdk-cloud-run-proxy google-cloud-sdk-app-engine-python-extras google-cloud-sdk-app-engine-grpc google-cloud-sdk-bigtable-emulator google-cloud-sdk-minikube google-cloud-sdk-cloud-build-local google-cloud-sdk-spanner-emulator google-cloud-sdk-cbt google-cloud-sdk-anthos-auth google-cloud-sdk google-cloud-sdk-log-streaming google-cloud-sdk-enterprise-certificate-proxy google-cloud-sdk-local-extract google-cloud-sdk-skaffold google-cloud-sdk-firestore-emulator google-cloud-sdk-datastore-emulator google-cloud-sdk-config-connector google-cloud-sdk-app-engine-python google-cloud-sdk-kubectl-oidc google-cloud-sdk-package-go-module kubectl google-cloud-sdk-harbourbridge google-cloud-sdk-pubsub-emulator google-cloud-sdk-terraform-tools google-cloud-sdk-app-engine-go
RUN echo "export USE_GKE_GCLOUD_AUTH_PLUGIN=True" >> /etc/profile \
    && . /etc/profile \
    && gke-gcloud-auth-plugin --version