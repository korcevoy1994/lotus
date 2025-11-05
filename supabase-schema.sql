-- Создание таблицы для регистраций на мероприятие LOTUS
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nume VARCHAR(255) NOT NULL,
  prenume VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Добавление RLS (Row Level Security) для таблицы
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Создание политики, позволяющей вставку данных для всех пользователей
CREATE POLICY "Allow insert for all users" ON registrations
  FOR INSERT WITH CHECK (true);

-- Создание политики, позволяющей чтение данных для всех пользователей
CREATE POLICY "Allow select for all users" ON registrations
  FOR SELECT USING (true);

-- Создание индекса для оптимизации запросов
CREATE INDEX idx_registrations_created_at ON registrations(created_at);