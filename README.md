# Node.js Boilerplate

## Mô tả dự án

Đây là project boilerplate cho Node.js sử dụng Express và TypeScript, được thiết kế theo mô hình MVC, tích hợp sẵn các best practices về cấu trúc code, kiểm tra code style, lint, commit message, và hỗ trợ phát triển API RESTful với MongoDB, JWT.

## Cấu trúc dự án

```
├── src/
│   ├── constants/         # Các hằng số, enum, message, httpStatus
│   ├── controllers/       # Xử lý logic cho các route (controller)
│   ├── middlewares/       # Các middleware cho Express (validate, error, ...)
│   ├── models/            # Định nghĩa các model, schema, database
│   ├── routes/            # Định nghĩa các route của ứng dụng
│   ├── services/          # Xử lý logic nghiệp vụ (service)
│   ├── utils/             # Các hàm tiện ích (utility)
│   └── index.ts           # Entry point của ứng dụng
├── package.json           # Thông tin project và dependencies
├── tsconfig.json          # Cấu hình TypeScript
├── nodemon.json           # Cấu hình Nodemon cho dev
├── .eslintrc, .prettierrc # Cấu hình ESLint, Prettier
├── .husky/                # Cấu hình Husky cho git hooks
└── ...
```

## Công nghệ sử dụng

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB** (thông qua package `mongodb`)
- **JWT** (`jsonwebtoken`)
- **dotenv** (quản lý biến môi trường)
- **lodash** (hỗ trợ thao tác dữ liệu)
- **ESLint, Prettier** (kiểm tra và định dạng code)
- **Husky, Commitlint, lint-staged** (quản lý git hooks, kiểm tra commit message)
- **Nodemon** (tự động reload server khi dev)

## Hướng dẫn khởi động

```bash
pnpm install
pnpm dev
```

Truy cập [http://localhost:3000](http://localhost:3000) để kiểm tra server hoạt động.
