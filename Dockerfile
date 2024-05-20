# Используем официальный образ OpenJDK
FROM openjdk:11

# Устанавливаем Android SDK
RUN apt-get update && apt-get install -y wget unzip
RUN wget https://dl.google.com/android/repository/commandlinetools-linux-6858069_latest.zip
RUN unzip commandlinetools-linux-6858069_latest.zip -d /sdk
ENV ANDROID_HOME=/sdk
ENV PATH=$PATH:/sdk/cmdline-tools/bin

# Принимаем лицензионные соглашения и устанавливаем SDK
RUN yes | sdkmanager --licenses
RUN sdkmanager "platform-tools" "platforms;android-30" "build-tools;30.0.3"

# Копируем проект в контейнер
COPY . /app

# Устанавливаем Gradle
RUN wget https://services.gradle.org/distributions/gradle-6.8.3-bin.zip
RUN unzip gradle-6.8.3-bin.zip -d /opt
ENV PATH=$PATH:/opt/gradle-6.8.3/bin

# Собираем проект
WORKDIR /app
RUN ./gradlew build
