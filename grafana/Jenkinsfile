pipeline {
    agent any

    stages {
        stage('Build and push image') {
            tools {
                dockerTool 'docker'
            }

            steps{
                script {
                    docker.withTool('docker') {
                        docker.withRegistry("", 'wph-docker-hub') {
                            def imageName = "wph1720637550/jenkins-slave-k8s-gcloud-grafana:latest"
                            def dockerFileDir = "./"

                            def customImage = docker.build(imageName, dockerFileDir)
                            /* Push the container to the custom Registry */
                            customImage.push()
                            sh "docker rmi $imageName"
                            cleanWs()
                        }
                    }
                }
            }
        }
    }
}