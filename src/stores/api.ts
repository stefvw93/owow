import { defineStore } from "pinia";

export const useApiStore = defineStore("api", {
  state: () => ({ wizkids: [] as Wizkid[] }),
  getters: {},

  actions: {
    async createWizkid(body: Wizkid) {
      this.wizkids.push(body);
    },
  },
});

/**
 * A wizkid has the following information:
 * - Name
 * - Role: boss, developer, designer, intern.
 * - Email
 * - Picture
 * - Phone number (optional)
 */
export type Wizkid = {
  name: string;
  role: WizkidRole;
  email: string;
  picture: string;
  phoneNumber?: string;

  /* meta */
  id?: string;
  archived?: boolean;
};

export enum WizkidRole {
  Boss,
  Developer,
  Designer,
  Intern,
}
