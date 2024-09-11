## Providers
  - Các class có thể được coi là provider:
    + Services
    + Repositories
    + Factories
    + Helpers
    ...

  - Ý tưởng chính của provider là nó có thể được inject như một phụ thuộc (DI)  

## Services
  - Thường dùng để chịu trách nhiệm lưu data và trả data cho controller
  - Sử dụng @Injectable() decorator để chi ra rằng service đó được quản lý bới Nest IoC
  - Command để tạo một service
    1) nest g service [name]
    2) nest g s [name]

## Optional providers
  - Đôi khi, chúng ta có những phụ thuộc không cần resolve