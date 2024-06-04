pipeline {
    agent any
    environment {
        SONARQUBE_PATH='/var/lib/jenkins/tools/sonar-scanner-4.2.0.1873-linux/bin/sonar-scanner -Dsonar.projectKey=TSRTC-frontend -Dsonar.sources=./'
        GOOGLE_CHAT_WEBHOOK_LINK='https://chat.googleapis.com/v1/spaces/AAAAJND1WSM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=qjrllfUBiLxpDtvYIyxjv5hfefYMTALUPj8j_BwRSno'
        DEV_LINK='https://tsdev.divami.com'
        QA_LINK='https://tsqa.divami.com'
    }
    
    stages {
        stage('get_commit_msg') {
            steps {
                script {
                    env.GIT_COMMIT_MSG = sh (script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()
                    GIT_COMMIT_EMAIL = sh (
                    script: 'git --no-pager show -s --format=\'%ae\'',
                    returnStdout: true).trim()
                    echo "Git committer email: ${GIT_COMMIT_EMAIL}"
                    echo "${GIT_COMMIT_MSG}"
                }
            }
        }
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
                    sh 'npm install --ignore-scripts' 
                    sh 'npm run build'  
                }
            }
        }
        stage('deployment'){
            steps{
                script {
                    if (env.Env == 'dev') {
                        sh 'tar -czvf build.tar.gz dist'
                        sh 'ssh tsrtc@tsdev.divami.com "sudo mkdir -p /var/www/html/tsrtcdev; sudo chown -R tsrtc:tsrtc /var/www/html/tsrtcdev/ "'
                        sh 'scp build.tar.gz tsrtc@tsdev.divami.com:/var/www/html/tsrtcdev'
                        sh 'ssh tsrtc@tsdev.divami.com "cd /var/www/html/tsrtcdev; tar -xvzf build.tar.gz --strip 1" '
                    }
                    else {
                        sh 'tar -czvf build.tar.gz dist'
                        sh 'ssh tsrtc@tsqa.divami.com "sudo mkdir -p /var/www/html/tsrtcqa; sudo chown -R tsrtc:tsrtc /var/www/html/tsrtcqa/ "'
                        sh 'scp build.tar.gz tsrtc@tsqa.divami.com:/var/www/html/tsrtcqa'
                        sh 'ssh tsrtc@tsqa.divami.com "cd /var/www/html/tsrtcqa; tar -xvzf build.tar.gz --strip 1" '
                    }
                }  

            }
        }
    }
    post {
        success {
            script {
                if (env.Env == 'dev') {
                    googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} with commit : ${GIT_COMMIT_MSG} , Git committer email: ${GIT_COMMIT_EMAIL} from Branch ${GIT_BRANCH} on Environment ${env.Env} was successfull. Check output in ${DEV_LINK} "  , url: "${env.GOOGLE_CHAT_WEBHOOK_LINK}"                                    
                }
                else {
                    googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} with commit : ${GIT_COMMIT_MSG} , Git committer email: ${GIT_COMMIT_EMAIL} from Branch ${GIT_BRANCH} on Environment ${env.Env} was successfull. Check output in ${QA_LINK}"  , url: "${env.GOOGLE_CHAT_WEBHOOK_LINK}"
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