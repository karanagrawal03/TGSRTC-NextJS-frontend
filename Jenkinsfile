pipeline {
    agent any
    environment {
        SONARQUBE_PATH='/var/lib/jenkins/tools/sonar-scanner-4.2.0.1873-linux/bin/sonar-scanner -Dsonar.projectKey=TSRTC-frontend -Dsonar.sources=./'
        GOOGLE_CHAT_WEBHOOK_LINK='https://chat.googleapis.com/v1/spaces/AAAAJND1WSM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=qjrllfUBiLxpDtvYIyxjv5hfefYMTALUPj8j_BwRSno'
    }
    stages {
        stage('Sonarqube') {
            steps {
                script {
                    nodejs('TSRTC') {
                        withSonarQubeEnv('Sonar') {
                            sh "${env.SONARQUBE_PATH}"           
                        } 
                    }
                } 
            }
        }
        stage('build'){
            steps{ 
                nodejs('TSRTC') {
                    echo 'building'
                    sh 'npm install' 
                    sh 'npm run build'  
                }
            }
        }
        stage('deployment'){
            steps{
                script {
                    if (env.Env == 'dev') {
                        sh 'tar -czvf build.tar.gz build'
                        sh 'ssh jenkins@demo.divami.com "sudo mkdir -p /var/www/html/tsrtcdev; sudo chown -R jenkins:jenkins /var/www/html/tsrtcdev/ "'
                        sh 'scp build.tar.gz jenkins@demo.divami.com:/var/www/html/tsrtcdev'
                        sh 'ssh jenkins@demo.divami.com "cd /var/www/html/tsrtcdev; tar -xvzf build.tar.gz" '
                        sh 'rm -rf build.tar.gz'
                    }
                    else {
                        sh 'tar -czvf build.tar.gz build'
                        sh 'ssh jenkins@demo.divami.com "sudo mkdir -p /var/www/html/tsrtcqa; sudo chown -R jenkins:jenkins /var/www/html/tsrtcqa/ "'
                        sh 'scp build.tar.gz jenkins@demo.divami.com:/var/www/html/tsrtcqa'
                        sh 'ssh jenkins@demo.divami.com "cd /var/www/html/tsrtcqa; tar -xvzf build.tar.gz" '
                        sh 'rm -rf build.tar.gz'
                    }
                }  

            }
        }
    }
    post {
        success {
            script {
                if (env.Env == 'dev') {
                    googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} with commit : ${GIT_COMMIT_MSG} , Git committer email: ${GIT_COMMIT_EMAIL} from Branch ${GIT_BRANCH} on Environment ${env.Env} was successfull. Check output in ${LINK} "  , url: "${env.GOOGLE_CHAT_WEBHOOK_LINK}"                                    
                }
                else {
                    googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} with commit : ${GIT_COMMIT_MSG} , Git committer email: ${GIT_COMMIT_EMAIL} from Branch ${GIT_BRANCH} on Environment ${env.Env} was successfull. Check output in ${LINK}"  , url: "${env.GOOGLE_CHAT_WEBHOOK_LINK}"
                }    
            }    
        }
        failure {
            googlechatnotification message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} with commit : ${GIT_COMMIT_MSG} , Git committer email: ${GIT_COMMIT_EMAIL} from Branch ${GIT_BRANCH} is Failed: Check output logs at  ${RUN_DISPLAY_URL}"  , url: "${GOOGLE_CHAT_WEBHOOK_LINK}"
        }
        always { 
            cleanWs()
        }
    }
}
