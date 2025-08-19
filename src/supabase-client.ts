import {createClient}   from "@supabase/supabase-js"

export const supabase = createClient(
    "https://ctbljqsftphhmpgwwzky.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0YmxqcXNmdHBoaG1wZ3d3emt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzEyODksImV4cCI6MjA2MTI0NzI4OX0.L7xkFjR_Dwmp7zTNFKIVLga9zK4TbJD2sRiotr9bPLk"
);

//put them in env file