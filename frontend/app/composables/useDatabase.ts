import type { DatabaseRow } from "~/types/database/databaseRow";

export function useDatabase() {
  const supabase = useSupabaseClient();

  async function createDatabase() {
    const { data, error } = await supabase.rpc("create_user_table");

    if (error) {
      return;
    }

    const db = data as { id: string };

    await navigateTo(`/ims/databases/${db.id}`);
  }

  return {
    createDatabase,
  };
}
