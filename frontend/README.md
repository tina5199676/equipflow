# EquipFlow 前端

前端使用 Vue 3、Vue Router、Pinia、Vuetify 與 Axios。頁面位於 `src/views/`，共用元件位於 `src/components/`，狀態由 `src/stores/` 管理，API 請求集中在 `src/services/`。

從 `frontend/` 目錄執行：

```sh
npm install
npm run serve
```

Vue CLI 開發伺服器預設使用 `http://localhost:8080`。API 預設為 `http://localhost:8000/api`；如需覆寫，在 `frontend/.env.local` 設定 `VUE_APP_API_URL`。需要有效的 Sanctum Bearer Token 才能呼叫受保護的 API；目前前端沒有登入頁面。

```sh
npm run build
npm run lint
```

完整專案架構、API 與後端啟動方式請參閱 [根目錄 README](../README.md)。
