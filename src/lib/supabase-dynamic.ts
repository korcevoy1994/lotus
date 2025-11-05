import { createClient } from '@supabase/supabase-js'

// Значения по умолчанию для разработки
const DEFAULT_SUPABASE_URL = 'https://ecdzqqqxsknsuxlfaptp.supabase.co'
const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZHpxcXF4c2tuc3V4bGZhcHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMjM4MDcsImV4cCI6MjA3Nzg5OTgwN30.HJwTk6ll1MZmTFVhGhg0p4g00bcTvEYv7_r5Szo0uWg'

// Функция для получения клиента Supabase
export function getSupabaseClient() {
  // Получаем переменные окружения с значениями по умолчанию
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY
  
  return createClient(supabaseUrl, supabaseAnonKey)
}

export interface Registration {
  id?: string
  nume: string
  prenume: string
  created_at?: string
}

export async function submitRegistration(nume: string, prenume: string) {
  const supabase = getSupabaseClient()
  
  try {
    const { data, error } = await supabase
      .from('registrations')
      .insert({ nume, prenume })
      .select()

    if (error) {
      console.error('Error submitting registration:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}