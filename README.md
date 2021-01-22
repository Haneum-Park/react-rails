# 리액트 + 레일즈 탬플릿

* Ruby version
- 3.0.0

* Rails version
- 6.1.1

```
레일즈와 루비의 버전은 서로 호환되어야합니다.

```
[레일즈&루비 버전 호환](https://www.fastruby.io/blog/ruby/rails/versions/compatibility-table.html)


* devDependencies
- webpack: v4.41.2
- webpack-cli: v3.3.10
- webpack-dev-server: v3.11.2

```
rails를 6.x버전으로 설치 후 프로젝트를 구성하면 웹팩관련 라이브러리는 최신으로 설치됩니다.
최신으로 설치하면 웹팩 4 이후부터 webpack-cli도 같이 설치하셔야합니다.

```

### Warning
```
webpack-cli를 설치 후 webpack-dev-server 도 같이 설치하셔야하는데
webpack-dev-server로 실행되던 웹팩이 오류를 일으킵니다.

webpack-dev-server 가 아닌 webpack serve로 실행해야하는데,
리액트와 레일즈 둘 다 실행해야하는 시점에서 이 커맨드는 잘 되지 않습니다.

webpack을 4.x버전으로 낮추고 그에 호환되는 webpack-cli버전도 3.x으로 낮추세요.
webpack-dev-server의 버전은 그대로 두고 실행하면 됩니다.

버전을 낮추어 실행해주세요

```

### Start
1. yarn install
2. related of webpack version check
3. bundle install
4. bin/webpack-dev-server
5. rails s
