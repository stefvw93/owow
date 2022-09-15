import { computed } from "vue";
import { useApiStore } from "./stores/api";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function useWizkidById(id: string) {
  const { wizkids } = useApiStore();
  const wizkid = computed(() => wizkids.find((e) => e.id === id));
  return wizkid;
}
