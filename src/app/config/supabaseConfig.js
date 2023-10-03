// supabaseConfig.js
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables from .env
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

// Ensure the environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and/or anon key are missing in .env file')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
