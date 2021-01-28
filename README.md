# 리액트 + 레일즈 탬플릿

* Ruby version
- 3.0.0

* Rails version
- 6.1.1

```
레일즈와 루비의 버전은 서로 호환되어야합니다.

```
[레일즈&루비 버전 호환](https://www.fastruby.io/blog/ruby/rails/versions/compatibility-table.html)


### Warning
* devDependencies
- webpack: v4.41.2
- webpack-cli: v3.3.10
- webpack-dev-server: v3.11.2


### Start
1. yarn install
2. bundle install
3. rails db:migrate
  - 마이그레이션 이전에, 디비가 구성되어있지 않다면 `rails db:create`를 먼저 진행
  - `rails db:create` 시 `confing/database.yml`에 설정한 database의 이름으로 구성됨
4. bin/webpack-dev-server
  - 진행하면 javascript코드를 저장 시 곧바로 반영
  - 안할시 `rails s`만 진행해도 되지만 새로고침해야 반영
5. rails server


### React Component generate
- 기본적으로 `app/javascript/components/` 내에 생성
```
rails g(or generate) react:component 'componentName'
```
- 특정 폴더에 생성 시
```
rails g(or generate) react:component 'folderName/componentName'
```

### Routes
- 모든 라우터에 대해 에러없이 진입가능하게 설정