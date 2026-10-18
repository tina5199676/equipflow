# EquipFlow 後端

後端為 PHP 8.2+ 與 Laravel 12 REST API，使用 Laravel Sanctum 驗證，開發環境預設使用 SQLite。API 路由定義在 `routes/api.php`，控制器位於 `app/Http/Controllers/`，Eloquent 模型位於 `app/Models/`，資料表結構與示範資料分別由 `database/migrations/` 和 `database/seeders/` 管理。

從 `backend/` 目錄執行：

```sh
composer install
Copy-Item .env.example .env
php -r "file_exists('database/database.sqlite') || touch('database/database.sqlite');"
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

PowerShell 中可直接使用上述指令；若使用 Bash，複製環境檔的指令改為 `cp .env.example .env`。API 預設網址為 `http://localhost:8000/api`。註冊與登入路由公開，其餘 API 需使用 Sanctum Bearer Token。

種子只建立虛構的測試使用者與設備資料。使用者帳號使用 `example.invalid` 保留網域，密碼為隨機值，不提供固定示範登入帳密。正式環境請使用自行管理的環境變數與資料。

Laravel 測試可執行：

```sh
php artisan test
```

完整專案架構與 API 清單請參閱 [根目錄 README](../README.md)。
