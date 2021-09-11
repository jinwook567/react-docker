if [ -d /home/ubuntu/build ]; then
    rm -rf /home/ubuntu/build
fi
# 만약 /home/ubuntu/build 디렉토리가 존재하면 지운다는 의미입니다.

mkdir -vp /home/ubuntu/build
# 다시 새로운 /home/ubuntu/build 디렉토리를 생성합니다.
