pipeline {
    environment {
        DOCKER_HUB_PRIVATE_KEY = credentials('docker-hub-private-key')
    }

    tools {
        dockerTool 'docker'
    }

    agent {
        label 'docker-slave'
    }

    stages {
        stage('build and push squarecookie/jenkins-slave-k8s-gcloud:latest to DockerHub public image repository'){
            steps{
                script{
                    sh 'docker login -u $DOCKER_HUB_PRIVATE_KEY_USR -p $DOCKER_HUB_PRIVATE_KEY_PSW'

                    dockerImage = docker.build 'squarecookie/jenkins-slave-k8s-gcloud:latest'
                    sh 'docker push squarecookie/jenkins-slave-k8s-gcloud:latest'
                }
            }
        }
    }
}