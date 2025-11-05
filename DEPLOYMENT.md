# Инструкции по развертыванию на Vercel

## Исправленные проблемы

### 1. Предупреждения о metadata viewport и themeColor
- **Проблема**: В Next.js 14+ viewport и themeColor должны быть вынесены в отдельный экспорт `viewport`
- **Решение**: 
  - В `src/app/layout.tsx` создан отдельный экспорт `viewport: Viewport`
  - В `src/app/about/page.tsx` добавлен экспорт `viewport: Viewport`
  - Создан `src/app/not-found.tsx` с правильной структурой metadata

### 2. Ошибка 404: NOT_FOUND на Vercel
- **Проблема**: Нестабильная версия Next.js 16.0.1 и отсутствие конфигурации Vercel
- **Решение**:
  - Понижена версия Next.js до стабильной 14.2.15
  - Понижена версия React до 18.3.1 для совместимости
  - Создан файл `vercel.json` с явной конфигурацией
  - Обновлен `next.config.ts` с оптимизациями

## Шаги для развертывания

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка переменных окружения в Vercel
В панели управления Vercel установите следующие переменные окружения:
- `NEXT_PUBLIC_SUPABASE_URL`: https://ecdzqqqxsknsuxlfaptp.supabase.co
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZHpxcXF4c2tuc3V4bGZhcHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMjM4MDcsImV4cCI6MjA3Nzg5OTgwN30.HJwTk6ll1MZmTFVhGhg0p4g00bcTvEYv7_r5Szo0uWg

### 3. Локальная проверка сборки
```bash
npm run build
```

### 4. Деплой на Vercel
Если вы используете Vercel CLI:
```bash
vercel --prod
```

Или через интеграцию с GitHub, просто отправьте изменения:
```bash
git add .
git commit -m "Fix metadata and deployment issues"
git push origin main
```

## Структура файлов после исправлений

```
src/app/
├── layout.tsx          # Исправлен metadata + viewport
├── page.tsx            # Главная страница
├── not-found.tsx       # Создан с правильной структурой
└── globals.css

vercel.json             # Конфигурация Vercel
next.config.mjs         # Оптимизированная конфигурация
package.json            # Обновлены версии зависимостей
```

## Возможные проблемы и решения

### Если сборка не проходит
1. Убедитесь, что все зависимости установлены: `npm install`
2. Проверьте версию Node.js (должна быть 18.x или 20.x)
3. Очистите кэш: `rm -rf .next && npm run build`

### Если переменные окружения не работают
1. Проверьте, что переменные установлены в настройках проекта Vercel
2. Убедитесь, что имена переменных начинаются с `NEXT_PUBLIC_` для клиентского доступа
3. Проверьте, что переменные доступны во время сборки в настройках Vercel

### Если страница все еще показывает 404
1. Проверьте, что все файлы находятся в правильных директориях
2. Убедитесь, что имена файлов соответствуют соглашениям Next.js
3. Проверьте логи сборки в Vercel для выявления ошибок