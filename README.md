## Controllers
  - Controller chịu trách nhiệm xử lý yêu cầu đến (request) và trả phản hồi (response) cho client    
  - Mục đích của controller là nhận các yêu cầu (requests) cho ứng dụng    
  - Router kiểm soát việc controller nào nhận yêu cầu nào    
  - Thông thường, mỗi controller có nhiều route, mỗi route thực hiện hành đồng khác nhau    
  - Để tạo một controller, chúng ta sử dụng class và decorators    
  - @Controller() decorator là bắt buộc khi define một controller
  - command tạo một controller   
    1) nest g controller [name] (--no-spec)
    2) nest g co [name] (--no-spec)

## Routing
  - Router kiểm soát việc controller nào nhận yêu cầu nào   
  - Đưa các router cùng quản lý một đối tượng vào chung 1 controller => dễ quản lý code   
  - Set prefix vào trong @Controller() decorator giúp dễ dàng nhóm các router cùng một nhóm và giảm thiểu lặp code    
  - Các decorator theo chuẩn HTTP methods:
    + @Get()
    + @Post()
    + @Patch()
    + @Put()
    + @Delete()
    + @Options()
    + @Head()
    + @All()    
  Chúng chỉ cho Nest biết rằng các enpoint dùng cho HTTP request    

  - Theo tiêu chuẩn:
    + khi một request HTTP được trả về là Javscript Object hoặc array, nó sẽ được tự động serialized Json
    + Khi giá trị trả về là giá trị nguyên thủy, Nest sẽ không serialize chúng
    + Chúng ta có thể thay đổi mã trả về bằng @HttpCode() decorator

  - Chúng ta có thể sử dụng các thư viện để customize cấu trúc trả về bằng @Res hoặc @Response decorator được cung cấp bởi express

  Note: Nếu sử dụng cùng lúc @Res và @Next() decorator, bạn phải set passthrough = true vào trong @Res decorator

## Request Object
  - Chúng ta có thể hướng dẫn Nest truy cập vào request-object bằng cách sử dụng @Req() hoặc @Request() decorator
  - Một số decorators giúp truy cập vào request-object của HTTP:
    + @Req() hoặc @Request() <=> req
    + @Res() hoặc @Response() <=> res
    + @Next() <=> next
    + @Session() <=> req.session
    + @Param(key?: string) <=> req.params / req.params[key]
    + @Body(key?: string) <=> req.body / req.body[key]
    + @Query(key?: string) <=> req.query / req.query[key]
    + @Header(name?: string) <=> req.headers / req.headers[key]
    + @Ip() <=> req.ip
    + @HostParam() <=> req.hosts

  Note: Khi sử dụng @Res() hoặc @Response() decorator, phải trả về phản hồi như res.json(...) hoặc res.send(...).  
  Nếu không server sẽ bị treo
 
 ## Headers
  - Để customize header phản hồi, bạn có thể sử dụng @Header() decorator
  - VD: @Header('Cache-Control','none')
  
## Redirection
  - Redirect một phản hồi đến một URL khác  
  - Sử dụng @Redirect(url, statusCode) decorator

## Route parameters
  - Sử dụng @Param() decorator
  - Các route có parameters nên được khai báo sau các rout khác

## Sub-Domain Routing
  - @Controller() decorator có thể dùng [host] option để yêu cầu HTTP host tìm đến một giá trị được chỉ định  
  VD: @Controller({host: 'admin.example.com'})

  - @HostParam() decorator giúp truy cập các host parameters

## Scopes
  - Trong Nest, mọi thứ đều được chia sẻ giữa các yêu cầu gửi đến  
  - NodeJs không tuân theo Multi-Threaded Sateless Model => Singleton là an toàn cho ứng dụng
  - Nest cũng cung cấp việc inject scopes cho những trường hợp đặc biệt:
    + Default: Singleton
    + Request: giống AddScope() trong .net core
    + Transient: Luôn tạo mới một thể hiện khi xử dụng đến nó

## Asynchronicity
  - Nest cũng cấp async functions
  - Mỗi async function phải trả về 1 Promise
  - Nest cũng cho phép sử dụng observable streams của RxJS

## Request payloads
  - Sử dụng @Body() decorator để lấy payload body của HTTP
  - 