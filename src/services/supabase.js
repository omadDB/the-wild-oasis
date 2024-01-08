import { createClient } from "@supabase/supabase-js"
export const supabaseUrl = "https://nrvcsshwaaqdzrsmlgwa.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ydmNzc2h3YWFxZHpyc21sZ3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NzM5OTAsImV4cCI6MjAxOTI0OTk5MH0.jf5gYAbZv1Lm-jL8ldJ0iPtasYKcKYOVKtiQA8mWq60"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
