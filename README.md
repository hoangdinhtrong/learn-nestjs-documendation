## Introduction
  - Nest (NestJs) là một framework xây dựng cho NodeJs server-side  

  - Nó xây dựng trên Javascript và TypeScript  

  - Nó kết hợp các yếu tố OOP:  
    + OOP (Object Oriented Programming) - Lập trình hướng đối tượng  
    + FP (Functional Programming) - Lập trình hướng thủ tục  
    + FRP (Functional Reactive Programming) - Lập trình phản ứng chức năng  

  - Nest sử dụng các HTTP framework như Express (default) và Fastify (Optional)

  - Nest cung cấp mức trừu tượng cao hơn các NodeJs framework hay dùng này (Express/Fastity). Nhưng cũng biểu hiện trực tiếp API của chúng => giúp developers tự do trong việc dùng third-party modules

## Installation
  - Install NestJs CLI  
    npm i -g @nestjs/cli

  - Create a project  
    nest new [name] 

  Note:  
    + Để tạo một project TypeScript với tính năng chặt chẽ hơn, sử dụng flag: --strict  
    + Tạo một project theo cách thủ công  
      npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Struct
  - src   
    |___ app.controller.spec.ts - unit test for controller  
    |___ app.controller.ts - Controller with a single route  
    |___ app.module.ts - Root module of application  
    |___ app.service.ts - Service  
    |___ main.ts - file chính của application, sử dụng NestFactory để tạo một thể hiện của Nest application  

  - NestFactory class cung cấp một số methods tĩnh cho phép tạo một thể hiện của application:  
    + create() method trả về một application object, cái mà triển khai đủ INestApplication interface.  
    + Theo mặc định, khi tạo application thất bại => ứng dụng sẽ thoát với mã lỗi 1. 
    Nếu muốn thông báo lỗi => set abortOnError = false

  - Nest có thể làm việc với bất kỳ Node HTTP framework nào sau khi adapter được tạo  
  - Có 2 HTTP flatforms được hỗ trợ ngay lập tức là express (NestExpressApplication) và fastity (NestFastityApplication)

## Linting and Formatting   
  - Nest cung cấp cả format code với linter (eslint) và formatter (prettier)    
  - Lint and autofix with eslint   
    $ npm run lint    
  - Format with prettier   
    $ npm run format 
